import React from 'react';
import './Contact.css'; // Import the CSS file for styles
import { FaFacebookF, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p>If you have any questions or feedback, feel free to reach out to us!</p>

            <h2>Follow Us</h2>
            <div className="social-icons">
                <a href="https://www.facebook.com/priyanshusingh.rajawat.37" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://www.linkedin.com/in/priyanshu-singh-0859211b6/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/___priyanshusinghrajawat___/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@technicalworld9464" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
            </div>

            <h2>Contact Information</h2>
            <p>Email: priyanshusingh00004@gmail.com</p>
            <p>Phone: 9971196062</p>
        </div>
    );
};

export default Contact;
