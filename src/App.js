import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experience,
  education
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";

import Experience from "./components/home/Experience";
import Education from "./components/home/Education";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message1={about.message1}
          message2={about.message2}
          message3={about.message3}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {
        education.show && (
          <Education education={education}/>
      )}
      {
        experience.show && (
          <Experience experience={experience}/>
      )}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message1={leadership.message1}
          img1={leadership.images1}
          message2={leadership.message2} 
          img2={leadership.images2}
          message3={leadership.message3}
          img3={leadership.images3}
          message4={leadership.message4} 
          img4={leadership.images4}
          message5={leadership.message5} 
          img5={leadership.images5}
          message6={leadership.message6} 
          img6={leadership.images6}
          message7={leadership.message7} 
          img7={leadership.images7}
          message8={leadership.message8}
          img8={leadership.images8}
          message9={leadership.message9}
          img9={leadership.images9}
          message10={leadership.message10}
          img10={leadership.images10}
          message11={leadership.message11}
          img11={leadership.images11}
          message12={leadership.message12}
          img12={leadership.images12}
          message13={leadership.message13}
          img13={leadership.images13}
          message14={leadership.message14}
          img14={leadership.images14}
          message15={leadership.message15}
          img15={leadership.images15}
          message16={leadership.message16}
          img16={leadership.images16}
          message17={leadership.message17}
          img17={leadership.images17}
          message18={leadership.message18}
          img18={leadership.images18}
          message19={leadership.message19}
          img19={leadership.images19}
          message20={leadership.message20}
          img20={leadership.images20}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
