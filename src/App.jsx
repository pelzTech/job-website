import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JobPage from './components/JobPage';
import About from './components/About';
import CareerAdvice from './components/CareerAdvice';
import Support from './components/Support';
import Home from './components/Home';
import ApplyPage from './components/ApplyPage';
import EmployersJobList from './components/EmployersJobList';
import ApplicationForm from './components/ApplicationForm';
import './App.css';

const AppContent = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsFirstVisit(true);
    }
  }, []);

  const handleEnterPortal = () => {
    
    localStorage.setItem('hasVisited', 'true');
    setIsFirstVisit(false);
    navigate('/home'); 
  };

  return (
    <>
      {isFirstVisit ? (
        <WelcomePage onEnter={handleEnterPortal} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/apply" element={ApplicationForm} /> 
            <Route path="/employers-job-list" element={<EmployersJobList />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<JobPage />} />
            <Route path="/career-advice" element={<CareerAdvice />} />
            <Route path="/support" element={<Support />} />
            <Route path="/apply/:jobId" element={<ApplyPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
