import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const SearchPage = () => {
  const [articles, setArticles] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            category: 'politics',
            apiKey: '76049658fd8f478ca233e978e2dc267e'
          }
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching the news data', error);
      }
    };
    fetchNews();
  }, []);

  const handleSearch = async () => {
    if (!input.trim()) return;

    setChatMessages([...chatMessages, { text: input, user: 'user' }]);
    try {
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          q: input,
          apiKey: '76049658fd8f478ca233e978e2dc267e'
        }
      });

      const newsArticles = response.data.articles;
      if (newsArticles.length === 0) {
        setChatMessages(prevMessages => [
          ...prevMessages,
          { text: `No articles found for "${input}"`, user: 'bot' }
        ]);
      } else {
        const articlesList = newsArticles.map(article => article.title +"\n");
        setChatMessages(prevMessages => [
          ...prevMessages,
          { text: articlesList, user: 'bot' }
        ]);
      }
    } catch (error) {
      setChatMessages(prevMessages => [
        ...prevMessages,
        { text: 'Error fetching news data', user: 'bot' }
      ]);
    }
    setInput('');
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h2 className="text-primary">Latest News</h2>
          <div className="list-group">
            {articles.map((article, index) => (
              <a key={index} href={article.url} className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{article.title}</h5>
                  {article.urlToImage && (
                    <img src={article.urlToImage} className="img-fluid" style={{ maxHeight: '100px', maxWidth: '100px' }} alt="news" />
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="col-md-4" style={{position:"fixed",marginLeft:"900px"}}>
          <h2 className="text-primary">Chatbot</h2>
          <div className="card">
            <div className="card-header bg-primary text-white">News Search</div>
            <div className="card-body">
              <div className="chat-window" style={{ height: '400px', overflowY: 'scroll', backgroundColor: '#f8f9fa' }}>
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`d-flex ${msg.user === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                    <div className={`alert ${msg.user === 'user' ? 'alert-primary' : 'alert-secondary'} w-500`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-footer">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" onClick={handleSearch}>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SearchPage;