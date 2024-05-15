from flask import Flask, jsonify
import json
import requests

app = Flask(__name__)

def get_news():
    NEWS_API_KEY = '76049658fd8f478ca233e978e2dc267e'
    url = f'https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey={NEWS_API_KEY}'
    response = requests.get(url)
    return response.json()

@app.route('/api/news')
def news():
    news_data = get_news()
    articles = news_data.get('articles', [])
    list_of_articles = [
        {'title': article['title'], 'url': article['url'], 'img': article['urlToImage']}
        for article in articles
    ]
    return jsonify(list_of_articles)

if __name__ == '__main__':
    app.run()