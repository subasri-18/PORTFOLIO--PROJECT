import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import images from "./images.jpg"
import "../styles/Home.css";
function Home() {
  return (
    
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Subasri</h2>
        <img style={{height:"300px",width:"200px"}} src={images}></img>
        <div className="prompt">
          <p>A student engineer with a passion for becoming a software developer.</p>
          <a 
          href="https://www.linkedin.com/in/subasri-s-8a969a258"
          targrt="_blank"
          rel="noopener noreferrer"
          >
          <LinkedInIcon />
          </a>
          <a 
          href="https://mail.google.com/mail/u/0/#inbox"
          targrt="_blank"
          rel="noopener noreferrer"
          >
          <EmailIcon />
          </a>
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, React,JavaScript
            
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS,MySQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++</span>
          </li>
        </ol>
        
      </div>
    </div>
  );
}

export default Home;
