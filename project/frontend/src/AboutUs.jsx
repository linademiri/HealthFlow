import React from 'react';
import './AboutUs.css';
import teamImage from './assets/mot.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faStethoscope, faBuilding } from '@fortawesome/free-solid-svg-icons';

function AboutUs() {
  return (
    <div className="about-us">

      {/* Header */}
      <header className="about-header full-width-section">
        <h1>Welcome to Our Medical Center</h1>
        <p>Committed to providing excellent healthcare and compassionate care for all patients.</p>
      </header>

      {/* Mission & Vision */}
      <section className="mission-vision full-width-section">
        <div className="row">
          <div className="col-md-6">
            <h2>Our Mission</h2>
            <p>We provide the highest quality healthcare services in a compassionate, patient-centered environment, focusing on advanced treatments and patient well-being.</p>
          </div>
          <div className="col-md-6">
            <h2>Our Vision</h2>
            <p>To be a leader in medical excellence and innovation, trusted by our community for providing exceptional healthcare and improving patient outcomes.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values full-width-section">
        <h2>Our Values</h2>
        <div className="row text-center">
          <div className="col-md-4 value-item">
            <FontAwesomeIcon icon={faHeartbeat} size="3x" className="value-icon"/>
            <h3>Compassion</h3>
            <p>We put patients' needs first, ensuring they are treated with kindness, respect, and empathy at every stage of care.</p>
          </div>
          <div className="col-md-4 value-item">
            <FontAwesomeIcon icon={faStethoscope} size="3x" className="value-icon"/>
            <h3>Excellence</h3>
            <p>We strive for the highest medical standards through continuous education, research, and innovation.</p>
          </div>
          <div className="col-md-4 value-item">
            <FontAwesomeIcon icon={faBuilding} size="3x" className="value-icon"/>
            <h3>Integrity</h3>
            <p>We uphold ethical standards, fostering trust, honesty, and transparency in everything we do.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="our-team full-width-section">
        <h2>Meet Our Team</h2>
        <div className="team-image">
          <img src={teamImage} alt="Our Team" className="img-fluid" />
        </div>
        <p>Our team of healthcare professionals includes skilled doctors, nurses, and specialists who work tirelessly to ensure the best possible care for our patients.</p>
      </section>

      {/* Facilities */}
      <section className="facilities full-width-section">
        <h2>Our Facilities</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>Equipped with state-of-the-art medical equipment, our hospital offers advanced treatment rooms, comfortable patient accommodations, and a dedicated team ready to assist you.</p>
          </div>
          <div className="col-md-6">
            <img src="https://media.istockphoto.com/id/181553727/photo/outpatient-surgery-center.jpg?s=612x612&w=0&k=20&c=TSOFoFo6VWkBLtmvTgcsngxYmn3I677ilQxhoAbzfnE=" 
              alt="Our Hospital" className="img-fluid facility-img"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
