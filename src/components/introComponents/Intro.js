import React, { useRef } from "react";
import "./intro.css";

const Intro = () => {
  const arr = [1,2,3]
  const passionRef = useRef()

 

  return (
    <div className="Intro">
      <div className="intro-h">
        <div className="name-h">
          <div className="name">
            GIFTY <span className="name austin">AUSTIN</span>{" "}
          </div>
        </div>
        <div className="bio">
          A versatile individual, possessing skills in web development [MERN
          stack], Python and machine learning. Driven by an unwavering
          commitment to growth and learning. I seek opportunities to expand my
          knowledge and skills in all areas of expertise.
        </div>
        <div className="beyond-tb">Beyond technical boundaries</div>

        <div className="d-flex my-3 w-100 h-100 align-items-center">
        
       
      <div className="v-line"></div>
      <div className="passion-h">
      <div className="mp">Music Production</div>
      <div className="ve">Video Editing</div>
      <div className="pg">Photography</div>
      <div className="fb">Football</div></div>
          
        </div>
      </div>
    </div>
  );
};

export default Intro;
