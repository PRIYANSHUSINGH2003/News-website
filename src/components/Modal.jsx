import React from 'react';
import './Modal.css'; // Add styles for the modal

const Modal = ({ isOpen, onClose, url }) => {
    if (!isOpen) return null;

    const isIframeSupported = (url) => {
        const blockedDomains = ['www.aajtak.in']; // Add other domains as necessary
        return !blockedDomains.some(domain => url.includes(domain));
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                {isIframeSupported(url) ? (
                    <iframe 
                        src={url} 
                        title="News Article" 
                        className="modal-iframe"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <div className="iframe-error">
                        <p>This article cannot be displayed in an iframe.</p>
                        <a href={url} target="_blank" rel="noopener noreferrer">Open in new tab</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
