import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
  const [toDisplay, setToDisplay] = useState([]);
  const [linkTo, setLinkTo] = useState()
  const tech = [
    "Meme Generator",
    "Profile Manager",
    "Messenger UI",
    "User Authentication UI",
    "Quiz Page",
  ];
  const videoEditing = [];
  const musicProduction = ["Adam Szabo - Knock me out (Remix)"];
  const football = [];
  const links = {
    tech: [
      "https://memes-ots.netlify.app/",
      "https://scintillating-nasturtium-05dfa0.netlify.app",
      "https://chat-app-rn.netlify.app",
      "https://spiffy-flan-961f29.netlify.app/",
      "https://quiz-app-hcjb.netlify.app",
    ],
    musicProduction:["https://soundcloud.com/user-839523923/adam-sazbo-knock-me-out-remix"]
  };
  const handleProjectClick = (e) => {
    switch (e.target.getAttribute("name")) {
      case "tech":
        setToDisplay(tech);
        setLinkTo(e.target.getAttribute("name"))
        break;
      case "videoEditing":
        setToDisplay(videoEditing);
        setLinkTo(e.target.getAttribute("name"))
        break;
      case "musicProduction":
        setToDisplay(musicProduction);
        setLinkTo(e.target.getAttribute("name"))
        break;
      case "football":
        setToDisplay(football);
        setLinkTo(e.target.getAttribute("name"))
        break;
      default:

        break;
    }
  };
  return (
    <div>
      <div className="projects-h d-flex">
        <div
          name="tech"
          onClick={(e) => {
            handleProjectClick(e);
          }}
        >
          Technical Projects
        </div>
        <div
          name="videoEditing"
          onClick={(e) => {
            handleProjectClick(e);
          }}
        >
          Video Editing
        </div>
        <div
          name="musicProduction"
          onClick={(e) => {
            handleProjectClick(e);
          }}
        >
          Music Production
        </div>
        <div
          name="football"
          onClick={(e) => {
            handleProjectClick(e);
          }}
        >
          Football
        </div>
      </div>
      {toDisplay.map((c, i) => {
        return (
          <div className="my-3 project-link" key={i}>
            <a href={links[linkTo][i]} target="_blank">{c}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
