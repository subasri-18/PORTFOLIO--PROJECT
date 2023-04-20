import React from "react";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon /> */}
        <a
          href = "https://www.linkedin.com/in/subasri-s-8a969a258"
          target="_blank"
          rel="noopener noreferrer"
        >
        <LinkedInIcon />
        </a>
        {/* <a
        href=""
        target="_blank"
        rel="noopener noreferrer" */}

        <GithubIcon/>
      </div>
      
    </div>
  );
}

export default Footer;
