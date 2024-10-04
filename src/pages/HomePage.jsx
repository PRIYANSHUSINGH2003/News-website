import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import './HomePage.css';

const HomePage = () => {
    const [topHeadlines, setTopHeadlines] = useState([]);
    const [popularNews, setPopularNews] = useState([]);
    const [allNews, setAllNews] = useState([]);
    const [category, setCategory] = useState('latest');
    const [searchQuery, setSearchQuery] = useState('');
    const [language, setLanguage] = useState('hi');
    const [country, setCountry] = useState('IN'); // Default country to 'IN'

    // List of GNews API keys
    const API_KEYS = [
        'c59d1c54798cd9db32d73f91766b2862', // GNews API Key 1
        '46f845a28a941de556482618b94f56a1',          // GNews API Key 2
        '57520fab5e8c3cf02e27ade1009421ce',           // GNews API Key 3
        'cd8f94535027d81230dd5df11f489720',
        'fb9fb5e8b42addc23c319aefcc823eae',
        '7e2a261fbcb93e0e4dd8b8006e9d4ffc',
        '76c0cb72e55bd09ee45e564e035a47ad',
        'eb2d1f51e75e0dedd0627bd71738a427',
        '971701f2671a250eab906b53353fd9db',
        '659c334d4cd99054d66ef0531b4a580e',
        'b61bca7fa7bd589e9ccc3afab3e42d80',
        'a8f73f7a71c63898a8afebd33cf1108a',
        'e3c864ebb7a4399054608ef631154fc6',
        '57ac2004023cfd27af89e49f6e07e786',
        'cbb2264defe09a589cfa00bbe3aa8237',
        '09ea65a2235b9c3574b263588dbf7f82',
        'd3b9837ee745af383c40b525875bec78',
    ];
    
    const [currentApiKeyIndex, setCurrentApiKeyIndex] = useState(0);
    const [apiKey, setApiKey] = useState(API_KEYS[currentApiKeyIndex]);

    // List of available countries for news
    const countries = [
        { code: 'IN', name: 'India' },
        { code: 'US', name: 'United States' },
        { code: 'GB', name: 'United Kingdom' },
        { code: 'CA', name: 'Canada' },
        { code: 'AU', name: 'Australia' },
        { code: 'FR', name: 'France' },
        { code: 'DE', name: 'Germany' },
        { code: 'JP', name: 'Japan' },
        { code: 'BR', name: 'Brazil' },
        { code: 'ZA', name: 'South Africa' },
    ];

    // Fetch Top Headlines based on category, language, and country
    const fetchTopHeadlines = async () => {
        try {
            const response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=${language}&country=${country}&apikey=${apiKey}`);
            setTopHeadlines(response.data.articles);
        } catch (error) {
            console.error('Error fetching top headlines:', error);
            handleApiError(error);
        }
    };

    // Fetch Popular News based on search query, language, and country
    const fetchPopularNews = async () => {
        try {
            const response = await axios.get(`https://gnews.io/api/v4/search?q=${searchQuery || 'india'}&sortby=popularity&lang=${language}&country=${country}&apikey=${apiKey}`);
            setPopularNews(response.data.articles);
        } catch (error) {
            console.error('Error fetching popular news:', error);
            handleApiError(error);
        }
    };

    // Fetch All News based on language and country
    const fetchAllNews = async () => {
        try {
            const response = await axios.get(`https://gnews.io/api/v4/search?q=news&lang=${language}&country=${country}&apikey=${apiKey}`);
            setAllNews(response.data.articles);
        } catch (error) {
            console.error('Error fetching all news:', error);
            handleApiError(error);
        }
    };

    const handleApiError = (error) => {
        // Check if the error is related to the API key limit (modify as needed)
        if (error.response && error.response.status === 403) { // Forbidden error might indicate API limit reached
            console.log('Switching to the next API key');
            const nextIndex = (currentApiKeyIndex + 1) % API_KEYS.length; // Loop through keys
            setCurrentApiKeyIndex(nextIndex);
            setApiKey(API_KEYS[nextIndex]);
            // Retry fetching the news with the new API key
            fetchTopHeadlines();
            fetchPopularNews();
            fetchAllNews();
        }
    };

    useEffect(() => {
        fetchTopHeadlines();
        fetchPopularNews();
        fetchAllNews();
    }, [category, searchQuery, language, country, apiKey]); // Add apiKey to the dependency array

    return (
        <div className="homepage">
            <div className="controls">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="latest">Latest</option>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="health">Health</option>
                    <option value="science">Science</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                </select>
                <select onChange={(e) => setLanguage(e.target.value)} value={language}>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="es">Spanish</option>
                    <option value="zh">Chinese</option>
                    <option value="hi">Hindi</option>
                </select>
                <select onChange={(e) => setCountry(e.target.value)} value={country}>
                    {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                            {country.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Ad placement at the top of the page */}
            <ins className="adsbygoogle"
                style={{ display: "block", textAlign: "center" }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-8553283570584154"
                data-ad-slot="4377728357"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>

            <section className="top-headlines">
                <h1>Top Headlines</h1>
                <div className="news-list">
                    {topHeadlines.map((article, index) => (
                        <NewsCard key={index} article={article} />
                    ))}
                </div>
            </section>

            {/* Ad placement between sections */}
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-format="autorelaxed"
                data-ad-client="ca-pub-8553283570584154"
                data-ad-slot="6330670942"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>

            <section className="popular-news">
                <h1>Popular News</h1>
                <div className="news-list">
                    {popularNews.map((article, index) => (
                        <NewsCard key={index} article={article} />
                    ))}
                </div>
            </section>

            {/* Ad placement at the bottom of the page */}
            <ins className="adsbygoogle"
                style={{ display: "block", textAlign: "center" }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-8553283570584154"
                data-ad-slot="4377728357"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
            
            <section className="all-news">
                <h1>All News</h1>
                <div className="news-list">
                    {allNews.map((article, index) => (
                        <NewsCard key={index} article={article} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
