import React, { useState } from 'react';
import './NewsCard.css';
import Modal from './Modal'; // Import the modal

const NewsCard = ({ article }) => {
    const [isOpen, setIsOpen] = useState(false);

    const source = article.source && article.source.name ? article.source.name.toLowerCase() : 'gnews'; 

    const getImageUrl = () => { 
        if (article.images && article.images.thumbnailProxied) {
            return article.images.thumbnailProxied;
        }
        if (article.urlToImage) {
            return article.urlToImage;
        }
        if (article.image) {
            return article.image;
        }
        if (article.photo_url) {
            return article.photo_url;
        }
        if (article.thumbnail) {
            return article.thumbnail;
        }
        return '/default-image.jpg'; // Fallback image if no other image is found
    };

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="news-card">
            <img src={getImageUrl()} alt={article.title || 'News image'} />
            <div className="news-card-content">
                <h2>{article.title || 'Untitled Article'}</h2>
                <p>{article.description || 'No description available.'}</p>
                <button onClick={handleOpenModal} className="read-more-button">
                    Read more
                </button>
                <p className="news-source">Source: {source}</p>
            </div>
            <Modal isOpen={isOpen} onClose={handleCloseModal} url={article.url} />
        </div>
    );
};

export default NewsCard;
