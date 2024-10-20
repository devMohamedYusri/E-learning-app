
import './Footer.css';

const Footer = () => {
  return (
  
    <footer className="footer bottom">
      <div className="footer-container">
      <div className="logoContainer">
          <img src="/src/assets/logo.png" alt="" />
          <h1>EDUVOYAGE</h1>
        </div>
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">contactUs</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Courses</h3>
          <ul>
            <li><a href="#">Top Courses</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Programming Courses</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Features</h3>
          <ul>
            <li><a href="#">Jobs Opportunities</a></li>
            <li><a href="#">Student Membership</a></li>
            <li><a href="#">Expert Monitors</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      <div className="footer-column newsletter">
          <h3>Newsletter</h3>
          <p>You can trust us. We only send promo offers.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright ©2024 All rights reserved</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fa-regular fa-envelope"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
