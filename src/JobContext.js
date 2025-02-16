import React, { createContext, useState, useContext } from 'react';
const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(() => {
    
    const savedJobs = localStorage.getItem('jobs');
    return savedJobs ? JSON.parse(savedJobs) : []; 
  });

  const addJob = (newJob) => {
    setJobs((prevJobs) => {
      const updatedJobs = [...prevJobs, newJob];
      localStorage.setItem('jobs', JSON.stringify(updatedJobs));
      return updatedJobs;
    });
  };

  return (
    <JobContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobContext.Provider>
  );
};


export const useJobs = () => useContext(JobContext);
