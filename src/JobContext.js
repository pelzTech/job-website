import React, { createContext, useState, useContext } from 'react';

// Create the context
const JobContext = createContext();

// Create the provider
export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(() => {
    // Fetch the jobs from localStorage if available
    const savedJobs = localStorage.getItem('jobs');
    return savedJobs ? JSON.parse(savedJobs) : []; // Fallback to an empty array if no jobs are saved
  });

  const addJob = (newJob) => {
    setJobs((prevJobs) => {
      const updatedJobs = [...prevJobs, newJob];
      // Save the updated job list to localStorage
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

// Custom hook to access job context
export const useJobs = () => useContext(JobContext);
