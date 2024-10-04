import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CategoryPage.css'; // Import the CSS file for styles

const CategoryPage = () => {
    const { category } = useParams(); // Get the category from the URL
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [language, setLanguage] = useState('hi');

    // Define API options for RapidAPI
    const fetchCategoryNews = async () => {
        const url = `https://news-api14.p.rapidapi.com/v2/search/articles?query=${category}%20news&language=${language}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'c69986cdd8msh9ff27ebee3814b3p1f4fc4jsn4feff81a2ee6',
                'x-rapidapi-host': 'news-api14.p.rapidapi.com'
            }
        };

        try {
            setLoading(true);  // Start loading
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setNews(result.data || []);  // Check if articles exists and set it, otherwise use an empty array
        } catch (error) {
            setError(error);  // Set error if any occurs
            console.error('Error fetching category news:', error);
        } finally {
            setLoading(false);  // Stop loading
        }
    };

    // Fetch news when the component mounts or the category changes
    useEffect(() => {
        fetchCategoryNews();
    }, [category, language]);

    // Display loading state or error message if necessary
    if (loading) return <p className="loading">Loading news...</p>;
    if (error) return <p className="error">Error fetching news: {error.message}</p>;
    if (!news.length) return <p className="no-news">No news articles available for this category.</p>; // Handle empty news case

    return (
        <div className="category-page">
            <select onChange={(e) => setLanguage(e.target.value)} value={language} className="language-select">
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="es">Spanish</option>
                <option value="zh">Chinese</option>
                <option value="hi">Hindi</option>
            </select>
            <h1 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)} News</h1> {/* Capitalize the category */}

            {/* AdSense Ad - Place it above the news list */}
            <ins className="adsbygoogle"
                style={{ display: 'block', textAlign: 'center', marginBottom: '20px' }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-8553283570584154"
                data-ad-slot="4377728357"></ins>
            <script>
                {(adsbygoogle = window.adsbygoogle || []).push({})}
            </script>


            <div className="news-lists">
                {news.map((article, index) => (
                    <div key={index} className="card-news">
                        {article.thumbnail && <img src={article.thumbnail} alt={article.title || 'News image'} className="news-thumbnail" />}
                        <h3 className="news-title">{article.title}</h3>
                        <p className="news-authors">Authors: {article.authors.join(', ')}</p>
                        <p className="news-description">{article.description}</p>
                        <p className="news-publisher">
                            Publisher: {article.publisher.name} |
                            <a href={article.publisher.url} target="_blank" rel="noopener noreferrer"> Visit</a>
                            <img src={article.publisher.favicon} alt="" className="publisher-icon" />
                        </p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">Read more</a>
                    </div>
                ))}
            </div>

            {/* AdSense Ad - Place it below the news list */}
            <ins className="adsbygoogle"
                style={{ display: 'block', textAlign: 'center', marginTop: '20px' }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-8553283570584154"
                data-ad-slot="4377728357"></ins>
            <script>
                {(adsbygoogle = window.adsbygoogle || []).push({})}
            </script>

            {/* AdSense Ad - Place a banner at the bottom of the page */}
            <ins className="adsbygoogle"
                style={{ display: 'block', marginTop: '20px' }}
                data-ad-client="ca-pub-8553283570584154"
                data-ad-slot="4757696834"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <script>
                {(adsbygoogle = window.adsbygoogle || []).push({})}
            </script>
        </div>
    );
};

export default CategoryPage;
