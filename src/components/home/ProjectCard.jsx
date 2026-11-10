import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const ProjectCard = ({ value }) => {
  const { name, description, svn_url, stargazers_count, languages_url, pushed_at, default_branch, homepage } = value;
  const loading = !svn_url;
  return (
    <Col md={6} className="d-flex">
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded w-100">
        <Card.Body className="d-flex flex-column">
          <Card.Title as="h5">{name || <Skeleton />}</Card.Title>
          <Card.Text>{loading ? <Skeleton count={2} /> : description || <span className="text-muted">No description yet.</span>}</Card.Text>
          {loading ? <Skeleton count={2} /> : <CardButtons svn_url={svn_url} branch={default_branch} homepage={homepage} />}
          <hr />
          {loading ? <Skeleton count={3} /> : <Language languages_url={languages_url} repo_url={svn_url} />}
          <div className="mt-auto">
            {loading ? <Skeleton /> : <CardFooter star_count={stargazers_count} repo_url={svn_url} pushed_at={pushed_at} />}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ svn_url, branch, homepage }) => {
  return (
    <div className="d-flex flex-wrap gap-2">
      {homepage && (
        <a href={homepage} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
          <i className="fas fa-external-link-alt me-1" /> Live
        </a>
      )}
      <a href={svn_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">
        <i className="fab fa-github me-1" /> Repo
      </a>
      <a href={`${svn_url}/archive/refs/heads/${branch || "master"}.zip`} className="btn btn-outline-secondary">
        <i className="fas fa-download me-1" /> Download ZIP
      </a>
    </div>
  );
};

const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState({});

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const languages = Object.keys(data);
  const total = languages.reduce((sum, l) => sum + data[l], 0);

  return (
    <div className="pb-3 d-flex flex-wrap gap-1 align-items-center">
      <span className="me-1">Languages:</span>
      {languages.length
        ? languages.map((language) => (
            <a
              key={language}
              className="text-decoration-none"
              href={repo_url + `/search?l=${encodeURIComponent(language)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="badge bg-light text-dark border">
                {language}: {Math.trunc((data[language] / total) * 1000) / 10}%
              </span>
            </a>
          ))
        : <span className="text-muted">none listed</span>}
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const hours = Math.trunc((Date.now() - date.getTime()) / 1000 / 60 / 60);
    if (hours < 1) return setUpdated_at("just now");
    if (hours < 24) return setUpdated_at(`${hours} ${hours === 1 ? "hour" : "hours"} ago`);
    const time = new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric" }).format(date);
    return setUpdated_at(`on ${time}`);
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="card-text d-flex flex-wrap gap-3 align-items-center mb-0">
      <a href={repo_url + "/stargazers"} target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
        <i className="fas fa-star" /> Stars <span className="badge bg-dark">{star_count}</span>
      </a>
      <small className="text-muted">Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;
