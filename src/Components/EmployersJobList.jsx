import React from 'react';
import { jobs as initialJobs } from '../data'; 

const EmployersJobList = () => {
  return (
    <div className="employers-job-list">
      <h1>Employer Job List</h1>
      <p>Here are all the jobs created by employers.</p>
      
      {initialJobs.length > 0 ? (
        initialJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p>{job.description}</p>
            <p><strong>Requirements:</strong> {job.requirements}</p>
          </div>
        ))
      ) : (
        <p>No jobs available.</p>
      )}
    </div>
  );
};

export default EmployersJobList;
