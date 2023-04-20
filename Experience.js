import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { Divider } from "@mui/material";

function Experience() {
  return (
    <div className="experience">
     
          <h3 className="">
            Atttended workshop on Internet of Things 
          </h3>
          <p>Sri Krishna College of Engineering and Technology</p>
          <br></br>
       <Divider/>
          <h3 className="">
            Currently pursuing BE Electronics and communication engineering in Sri Krishna College of Engineering and Technology
          </h3>
<br></br>
<Divider/>
          <h4 className="">
           BACHELOR'S DEGREE
          </h4>
          <p> ECE</p>
        
        
          <h3 className="">
            Participated in Cyber Hackathon
          </h3>
          <h4 className="">
            Sri Krishna arts and science college
          </h4>
<br></br>
<Divider></Divider>
          <p>VPN unmasking</p>
        
          <h3 className="">
            Participated in paper presentation
          </h3>
          <h4 className="">
            Dr.N.G.P college of arts and science
          </h4>
          <p>
            Sustainable Solar Challenge
          </p>
        
    </div>
  );
}

export default Experience;
