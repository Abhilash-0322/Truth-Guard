// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const HomePage = () => {
//   return (
//     <div className="container mt-4">
//       <h1 className="text-primary">Welcome to Truth Guard</h1>
//       <p>Your source for the latest news and information. Use the search feature to find articles on specific topics.</p>
//     </div>
//   );
// };

// export default HomePage;
// import React from 'react';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
// import NewsSearch from './NewsSearch';
import axios from 'axios';

const HomePage = () => {
    const [articles, setArticles] = useState([]);
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

    try {
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          q: input,
          apiKey: '76049658fd8f478ca233e978e2dc267e'
        }
      });

      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching news data', error);
    }
  };
  return (
    <div>
      {/* Navigation */}
     

      {/* Slider */}
      <section className="slider_container">
        <section className="slider">
          <div className="slide one">
            <img src="assets/img/img1.jpg" alt="Slide 1" />
          </div>
          <div className="slide two">
            <img src="assets/img/img 2.jpg" alt="Slide 2" />
          </div>
          <div className="slide three">
            <img src="assets/img/img 3.jpg" alt="Slide 3" />
          </div>
          <div className="slide four">
            <img src="assets/img/img4.jpg" alt="Slide 4" />
          </div>
          <div className="slide five">
            <img src="assets/img/img5.jpg" alt="Slide 5" />
          </div>
          <div className="slide six">
            <img src="assets/img/img6.jpg" alt="Slide 6" />
          </div>
        </section>
      </section>
      

      {/* Masthead */}
      <header className="masthead">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                <h1 className="mb-5">Generate more Authentic News !</h1>
                <form className="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                  <div className="row">
                    <div className="col">
                      <input className="form-control form-control-lg" id="searchArticles" type="text" placeholder="Search News"/>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
                    </div>
                  </div>
                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">Form submission successful!</div>
                      <p>To activate this form, sign up at</p>
                      <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                  </div>
                  <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">Error sending message!</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      

      {/* Icons Grid */}
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex"><i className="bi-window m-auto text-primary"></i></div>
                <h3>Swift Verification</h3>
                <p className="lead mb-0">TRUTHGUARD'S RAG implementation and sentiment analysis algorithm quickly analyzes news articles to determine their credibility</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex"><i className="bi-layers m-auto text-primary"></i></div>
                <h3>Comprehensive Data</h3>
                <p className="lead mb-0">TRUTHGUARD's extensive database of verified information allows it to cross-reference claims with trusted sources.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex"><i className="bi-terminal m-auto text-primary"></i></div>
                <h3>Reliable Protection</h3>
                <p className="lead mb-0">TRUTHGUARD's robust system helps users identify and avoid the spread of misinformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcases */}
      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: "url('assets/img/fakeimg.webp')" }}></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Combating Misinformation</h2>
              <p className="lead mb-0">By leveraging TruthGuard, users can play a crucial role in combating the spread of fake news.</p>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-6 text-white showcase-img" style={{ backgroundImage: "url('assets/img/factcheck.gif')" }}></div>
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Fact-checking Made Easy</h2>
              <p className="lead mb-0">TruthGuard's user-friendly interface makes it simple for anyone to verify the credibility of online news.</p>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: "url('assets/img/complete.jpg')" }}></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Comprehensive Coverage</h2>
              <p className="lead mb-0">TruthGuard analyzes a wide range of news sources, ensuring users have access to reliable information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">What people are saying...</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-1.jpg" alt="..." />
                <h5>Tanya</h5>
                <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-2.jpg" alt="..." />
                <h5>Prince</h5>
                <p className="font-weight-light mb-0">"Thank Your For Providing Such Credible News"</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-3.jpg" alt="..." />
                <h5>Alia</h5>
                <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="call-to-action text-white text-center" id="signup">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <h2 className="mb-4">Ready to get started? Sign up now!</h2>
              <form className="form-subscribe" id="contactFormFooter" data-sb-form-api-token="API_TOKEN">
                <div className="row">
                  <div className="col">
                    <input className="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">Email Address is required.</div>
                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Email Address Email is not valid.</div>
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
                  </div>
                </div>
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    <p>To activate this form, sign up at</p>
                    <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                  </div>
                </div>
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">Error sending message!</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
              <ul className="list-inline mb-2">
                <li className="list-inline-item"><a href="#!">About</a></li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item"><a href="#!">Contact</a></li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
              </ul>
              <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2024. All Rights Reserved.</p>
            </div>
            <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-4">
                  <a href="#!"><i className="bi-facebook fs-3"></i></a>
                </li>
                <li className="list-inline-item me-4">
                  <a href="#!"><i className="bi-twitter fs-3"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="#!"><i className="bi-instagram fs-3"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <script>
        
        
      </script>

      {/* Bootstrap core JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* Core theme JS */}
      <script src="js/scripts.js"></script>
      {/* SB Forms JS */}
      <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </div>
  );
}

export default HomePage;