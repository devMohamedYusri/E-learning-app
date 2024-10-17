import { useEffect, useState } from "react";
import "./nav.css"; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5000ca"
          fillOpacity="0.8"
          d="M0,288L34.3,245.3C68.6,203,137,117,206,122.7C274.3,128,343,224,411,229.3C480,235,549,149,617,133.3C685.7,117,754,171,823,197.3C891.4,224,960,224,1029,186.7C1097.1,149,1166,75,1234,64C1302.9,53,1371,107,1406,133.3L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="logoContainer">
          <img src="/src/assets/logo.png" alt="" />
          <h1>EDUVOYAGE</h1>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
