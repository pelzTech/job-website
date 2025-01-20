import React from 'react';
import './WelcomePage.css';
import Job from "../assets/Job.png";


const WelcomePage = ({ onEnter }) => {
  return (
    <div className="welcome-page">
      <div className="logo-container">
        <img src={Job} alt="JobLinker Logo" className="logo" />
      </div>
      <h1>Welcome to JobLinker</h1>
      <button onClick={onEnter} className="welcome-btn">
        Enter the Job Portal
      </button>
    </div>
  );
};

export default WelcomePage;
