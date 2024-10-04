import React from 'react';
import './Privacy.css'; // Import the CSS file for styles

const Privacy = () => {
    return (
        <div className="privacy-page">
            <h1>Privacy Policy</h1>
            <p>Last updated: [Insert date]</p>
            <p>This Privacy Policy explains how we collect, use, and share information about you when you use our application.</p>

            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
                <li>Personal Information: Such as your name, email address, and contact details.</li>
                <li>Usage Data: Information about how you use our application.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul>
                <li>To provide and maintain our application.</li>
                <li>To notify you about changes to our application.</li>
                <li>To allow you to participate in interactive features when you choose to do so.</li>
                <li>To provide customer support.</li>
            </ul>

            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        </div>
    );
};

export default Privacy;
