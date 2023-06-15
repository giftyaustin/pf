import React from "react";
import "./hire.css";
import {useNavigate} from "react-router-dom"

const Hire = () => {
  const history = useNavigate()
  return (
    <div>
      <div className="d-flex hire-btn-h justify-content-center my-3">
        <button className="hire-btn" onClick={()=>{history("/hire")}}>Hire me as developer</button>
      </div>
    </div>
  );
};

export default Hire;
