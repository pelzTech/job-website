import React, { useState } from 'react';
import './JobPage.css';
import { jobs } from '../data'; 
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const JobPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openCategory, setOpenCategory] = useState(null);

  const categories = [
    { name: 'All', children: [] },
    { name: 'Accounting', children: ['Junior Accountant', 'Senior Accountant'] },
    { name: 'Administrative', children: ['Admin Assistant', 'Office Manager'] },
    { name: 'Driving', children: ['Driver', 'Delivery Driver'] },
    { name: 'Nursing & Care', children: ['Nurse', 'Caregiver'] },
    { name: 'Customer Care', children: ['Customer Support', 'Client Service'] },
    { name: 'Tech', children: ['Software Engineer', 'Web Developer', 'Data Analyst'] }
  ];

  const handleCategoryClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesCategory =
      selectedCategory === 'All' || job.category === selectedCategory;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation =
      searchLocation === '' || job.location.toLowerCase().includes(searchLocation.toLowerCase());

    return matchesCategory && matchesSearch && matchesLocation;
  });

  const navigate = useNavigate();

  const handleApplyClick = (jobId) => {
    navigate(`/apply/${jobId}`);
  };

  return (
    <div className="job-page-container">
      <h1 className="page-title">Job Listings</h1>

      <div className="search-wrapper">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search jobs by title or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="search-box">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search jobs by location..."
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
        </div>
        <select
          className="category-select"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          {categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="category-list">
        {categories.map((category) => (
          <div key={category.name} className="category-item">
            <h3 className="category-title" onClick={() => handleCategoryClick(category.name)}>
              {category.name} {openCategory === category.name ? '▼' : '▶'}
            </h3>
            {openCategory === category.name && category.children.length > 0 && (
              <ul className="subcategory-list">
                {category.children.map((child) => (
                  <li key={child} className="subcategory-item">{child}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="job-listings">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2 className="job-title">{job.title}</h2>
            <p><strong>Category:</strong> {job.category}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Description:</strong> {job.description}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <button className="apply-button" onClick={() => handleApplyClick(job.id)}>
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPage;
