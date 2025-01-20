import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ApplyPage.css';

const ApplyPage = () => {
  const { jobId } = useParams();

  // State to manage form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); // Default country code
  const [cvFile, setCvFile] = useState(null);
  const [requirement, setRequirement] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission (can be integrated with backend later)
    setResponseMessage('Your application has been accepted.');

    // Optionally, reset the form after submission
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setCvFile(null);
    setRequirement('');
  };

  return (
    <div>
      <h2>Apply for Job {jobId}</h2>

      {/* Display response message if available */}
      {responseMessage && <p className="response-message">{responseMessage}</p>}

      <form onSubmit={handleSubmit} className="apply-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <div className="phone-number-group">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="country-code-select"
            >
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+91">+91 (India)</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="cvFile">CV (PDF, DOC, or Image)</label>
          <input
            type="file"
            id="cvFile"
            accept=".pdf, .doc, .docx, image/*"
            onChange={(e) => setCvFile(e.target.files[0])}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="requirement">Qualification Requirement</label>
          <select
            id="requirement"
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            required
          >
            <option value="">Select Qualification</option>
            <option value="bsc">B.Sc</option>
            <option value="masters">Masters</option>
            <option value="highSchool">High School</option>
            <option value="others">Others</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyPage;
