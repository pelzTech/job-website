import React, { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    qualification: '',
    cv: null,
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      cv: file,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    setResponseMessage('Your application has been accepted.');
    
    setFormData({
      fullName: '',
      email: '',
      qualification: '',
      cv: null,
    });
  };

  return (
    <div className="application-form">
      <h2>Job Application</h2>

      {responseMessage && <p className="response-message">{responseMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="qualification">Qualification</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cv">Upload CV</label>
          <input
            type="file"
            id="cv"
            name="cv"
            accept=".pdf, .doc, .docx"
            onChange={handleFileChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
