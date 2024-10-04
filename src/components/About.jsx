import React from 'react';
import './About.css'; // Import your CSS file for styling

const About = () => {
    return (
        <div className="about-page">
            <h1>About This Application</h1>
            <p>
                Welcome to our news aggregator application! Here, you can find the latest news articles
                from various categories in multiple languages. Our goal is to provide you with a convenient
                platform to stay updated on current events and topics of interest.
            </p>
            <h2>Features</h2>
            <ul>
                <li>Search for news articles by category</li>
                <li>Select from multiple languages</li>
                <li>View articles with images, titles, authors, and descriptions</li>
                <li>Link to the original source for further reading</li>
            </ul>
            <h2>Technologies Used</h2>
            <p>
                This application is built using React, and it leverages the RapidAPI for fetching news articles.
                The design is responsive, ensuring a seamless experience across devices.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions or feedback, feel free to reach out to us via our contact page.
            </p>
        </div>
    );
};

export default About;
