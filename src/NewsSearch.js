import React, { useState } from 'react';

function NewsSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const apiKey = '76049658fd8f478ca233e978e2dc267e'; // Replace 'YOUR_NEWS_API_KEY' with your actual API key
      const url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      setSearchResults(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search keyword"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {searchResults.map((article, index) => (
          <div key={index} className="article">
            <img src={article.urlToImage} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>Source: {article.source.name}</p>
            <p>Published at: {new Date(article.publishedAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsSearch;