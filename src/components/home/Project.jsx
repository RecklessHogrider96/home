import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=pushed&direction=desc&per_page=30`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(dummyProject);

  const [projectsArray, setProjectsArray] = useState([]);
  const [failed, setFailed] = useState(false);

  const fetchRepos = useCallback(async () => {
    try {
      const response = await axios.get(allReposAPI);
      // newest first, skipping forks so the list shows your own projects
      let repoList = response.data.filter((r) => !r.fork).slice(0, length);
      for (const repoName of specfic) {
        if (repoList.some((r) => r.name === repoName)) continue;
        try {
          const one = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(one.data);
        } catch (error) {
          console.error(error.message);
        }
      }
      setProjectsArray(repoList);
    } catch (error) {
      // GitHub allows 60 unauthenticated requests an hour per visitor; when that runs out, say so instead of
      // leaving loading skeletons on screen forever
      console.error(error.message);
      setFailed(true);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container>
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        {failed ? (
          <p className="lead text-center">
            GitHub isn't answering right now.{" "}
            <a href={`https://github.com/${username}?tab=repositories`} target="_blank" rel="noopener noreferrer">
              See all projects on GitHub
            </a>
            .
          </p>
        ) : (
          <Row>
            {(projectsArray.length ? projectsArray : dummyProjectsArr).map((project, index) => (
              <ProjectCard key={`project-card-${index}`} value={project} />
            ))}
          </Row>
        )}
      </Container>
    </Jumbotron>
  );
};

export default Project;
