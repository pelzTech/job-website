import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Home.css';
import jobData from '../jobData';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const navigate = useNavigate();  

 
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    filterJobs(query, locationQuery);
  };

  const handleLocationSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setLocationQuery(query);

   
    filterJobs(searchQuery, query);
  };

  const filterJobs = (searchQuery, locationQuery) => {
    const filtered = [];
    jobData.forEach(category => {
      category.jobs.forEach(job => {
        if (
          (job.title.toLowerCase().includes(searchQuery) ||
            job.company.toLowerCase().includes(searchQuery) ||
            job.description.toLowerCase().includes(searchQuery)) &&
          job.location.toLowerCase().includes(locationQuery)
        ) {
          filtered.push(job);
        }
      });
    });

    setFilteredJobs(filtered);
  };


  const handleApplyClick = (jobId) => {
    navigate(`/apply/${jobId}`);  
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to the Job Portal</h1>
        <p>
          <span class="highlight-text">Explore a variety of jobs to</span> 
          <span class="gap"></span><br/>
          <span class="highlight-text-alt">kickstart your career.</span>
        </p>
        <button className="cta-button">Browse Jobs</button>
      </section>
      <section className="search">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for jobs, companies, or keywords"
            className="search-input"
          />
        </div>
      </section>

      <section className="search-location">
        <div className="search-container">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="search-icon" />
          <input
            type="text"
            value={locationQuery}
            onChange={handleLocationSearch}
            placeholder="Search for jobs by location"
            className="search-input"
          />
        </div>
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} className="button-icon" />
          find jobs
        </button>
      </section>


      <section className="categories">
        <h2>Popular Job Categories</h2>
        <div className="category-list">
          {jobData.map(category => (
            <div key={category.id} className="category-card">
              {category.category}
            </div>
          ))}
        </div>
      </section>

      {searchQuery || locationQuery ? (
        <section className="featured-jobs">
          <h2>Featured Jobs</h2>
          <div className="job-list">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <div key={job.id} className="job-card">
                  <h3>{job.title}</h3>
                  <p>Company: {job.company}</p>
                  <p>Location: {job.location}</p>
                  <p>Salary: {job.price}</p>
                  <button className="apply-button" onClick={() => handleApplyClick(job.id)}>
                    <FontAwesomeIcon icon="paper-plane" className="button-icon" />
                    Apply Now
                  </button>
                </div>
              ))
            ) : (
              <p>No jobs found</p>
            )}
          </div>
        </section>
      ) : null}

      <section className="testimonials">
        <h2>Success Stories</h2>
        <div className="testimonial">
          <p>I found my dream job on this portal! The process was smooth and easy. Highly recommended!</p>
          <h4>pelzcode - Full-stack Web Developer</h4>
        </div>
        <div className="testimonial">
          <p>This site helped me connect with the right companies. I got hired within two weeks!hom</p>
          <h4>Faiz - Marketing Specialist</h4>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to find your next job?</h2>
        <button className="cta-button">
          <FontAwesomeIcon icon="user-plus" className="button-icon" />
          Join Now to Start Your Application
        </button>
      </section>
    </div>
  );
};

export default Home;
