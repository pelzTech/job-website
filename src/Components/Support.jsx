import React, { useState } from 'react';
import './Support.css';

const Support = () => {
  const [faqAnswers, setFaqAnswers] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false,
    faq5: false,
  });

  const toggleAnswer = (faq) => {
    setFaqAnswers(prevState => ({
      ...prevState,
      [faq]: !prevState[faq]
    }));
  };

  return (
    <div className="support">
      <h1 className="support-header">Support Center</h1>
      <p className="support-intro">
        We're here to assist you with any inquiries or challenges. Find detailed information and solutions below.
      </p>

      
      <section className="support-section">
        <h2>Contact Information</h2>
        <ul>
          <li><strong>Email Support:</strong> Reach us at <a href="mailto:support@example.com">pelzcode@gmail.com</a> for all your queries.</li>
          <li><strong>Phone Support:</strong> Call us at <a href="tel:+123456789">+1234 807 530 6443</a> for urgent assistance.</li>
          <li><strong>Live Chat:</strong> Use our integrated <a href="#">live chat</a> for real-time help.</li>
          <li><strong>Help Desk Form:</strong> Submit detailed queries through our <a href="#">help desk form</a>.</li>
        </ul>
      </section>

      <section className="support-section">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div>
          <h3>For Job Seekers:</h3>
          <ul>
            <li>
              <button className="faq-btn" onClick={() => toggleAnswer('faq1')}>
                <i className={faqAnswers.faq1 ? 'fas fa-minus-circle' : 'fas fa-plus-circle'}></i> How to create a profile.
              </button>
              {faqAnswers.faq1 && <p>To create a profile, click on the "Sign Up" button on the homepage, fill in your personal details, and upload your resume. Once your profile is complete, you can start applying for jobs!</p>}
            </li>
            <li>
              <button className="faq-btn" onClick={() => toggleAnswer('faq2')}>
                <i className={faqAnswers.faq2 ? 'fas fa-minus-circle' : 'fas fa-plus-circle'}></i> How to upload a resume.
              </button>
              {faqAnswers.faq2 && <p>You can upload your resume by going to your profile page and clicking the "Upload Resume" button. Make sure your resume is in PDF or Word format.</p>}
            </li>
            <li>
              <button className="faq-btn" onClick={() => toggleAnswer('faq3')}>
                <i className={faqAnswers.faq3 ? 'fas fa-minus-circle' : 'fas fa-plus-circle'}></i> How to search and apply for jobs.
              </button>
              {faqAnswers.faq3 && <p>Use the search bar to find jobs by title, company, or keywords. Once you find a job that fits, click "Apply" and submit your resume.</p>}
            </li>
            <li>
              <button className="faq-btn" onClick={() => toggleAnswer('faq4')}>
                <i className={faqAnswers.faq4 ? 'fas fa-minus-circle' : 'fas fa-plus-circle'}></i> Password recovery or account issues.
              </button>
              {faqAnswers.faq4 && <p>If you have trouble logging in, click the "Forgot Password" link on the login page to reset your credentials. For other issues, please contact support.</p>}
            </li>
          </ul>
        </div>
        <div>
          <h3>For Employers:</h3>
          <ul>
            <li>
              <button className="faq-btn" onClick={() => toggleAnswer('faq5')}>
                <i className={faqAnswers.faq5 ? 'fas fa-minus-circle' : 'fas fa-plus-circle'}></i> How to post a job listing.
              </button>
              {faqAnswers.faq5 && <p>Employers can post a job listing by logging into their account and clicking the "Post a Job" button. Fill out the job description and submit.</p>}
            </li>
          </ul>
        </div>
      </section>

     
      <section className="support-section">
        <h2>Guides and Tutorials</h2>
        <p>Step-by-step guides and video tutorials to help you:</p>
        <ul>
          <li>Create and optimize your profile.</li>
          <li>Search and apply for jobs effectively.</li>
          <li>Navigate the application process.</li>
          <li>Post job listings for employers.</li>
        </ul>
      </section>

      
      <section className="support-section">
        <h2>Account Management Help</h2>
        <ul>
          <li>Reset or recover your login credentials.</li>
          <li>Update your profile information.</li>
          <li>Manage subscriptions or account plans.</li>
        </ul>
      </section>

    
      <section className="support-section">
        <h2>Technical Support</h2>
        <ul>
          <li>Solutions for common technical issues (e.g., website loading errors, uploading issues).</li>
          <li>Supported browsers and devices.</li>
          <li>Step-by-step troubleshooting guidance.</li>
        </ul>
      </section>

    
      <section className="support-section">
        <h2>Community and Feedback</h2>
        <ul>
          <li>Join our <a href="#">community forum</a> to ask questions and get help from other members.</li>
          <li>Submit your feedback or suggest improvements through our <a href="#">feedback form</a>.</li>
        </ul>
      </section>
    </div>
  );
};

export default Support;
