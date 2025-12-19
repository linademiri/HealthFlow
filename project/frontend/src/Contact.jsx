import React, { useState } from 'react';
import './contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-us">

            {/* Header */}
            <header className="contact-header">
                <div className="section-inner">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you. Reach out to us anytime!</p>
                </div>
            </header>

            {/* Contact Info */}
            <section className="contact-info full-width-section">
                <div className="section-inner">
                    <div className="info-row">
                        <div className="info-column">
                            <h2>Get in Touch</h2>
                            <p>Have questions or concerns? Contact us through any of the methods below.</p>
                            <ul>
                                <li><strong>Phone:</strong> +123-456-7890</li>
                                <li><strong>Email:</strong> info@medical-ks.com</li>
                                <li><strong>Address:</strong> 123 Medical Street, Healthy City</li>
                            </ul>
                        </div>

                        <div className="info-column">
                            <h2>Visit Us</h2>
                            <p>Find us on the map below or schedule a visit.</p>
                            <div className="map-placeholder">
                                <img
                                    src="https://media.istockphoto.com/id/181553727/photo/outpatient-surgery-center.jpg?s=612x612&w=0&k=20&c=TSOFoFo6VWkBLtmvTgcsngxYmn3I677ilQxhoAbzfnE="
                                    alt="Map"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="contact-form full-width-section">
                <div className="section-inner">
                    <h2>Send Us a Message</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Your Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                        </div>

                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </form>
                </div>
            </section>

        </div>
    );
}

export default Contact;

