import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const storedUser = localStorage.getItem("user"); 
  const user = storedUser ? JSON.parse(storedUser) : null; 
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

  const handleSignUpStudent = () => {
    navigate("/sign-up");
  };

  const handleSignUpInstructor = () => {
    navigate("/instructorSign");
  };

  const handleCoursesClick = () => {
    navigate("/courses");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleMyCoursesNavigate = () => {
    navigate("/my-courses")
  };

  const handleLogout = () => {
    const token = localStorage.getItem('token');
    
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    if (token) {
      const logoutAPI = async () => {
        try {
          const response = await fetch('https://e-learning-backend-production-8163.up.railway.app/auth/logout', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,  
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            throw new Error('Failed to logout');
          }
  
          console.log('Logged out successfully');
        } catch (error) {
          console.error('Error logging out:', error.message);
        }
      };
  
      logoutAPI();
    } else {
      console.error('No token found, unable to logout');
    }
      navigate('/login');
  };
  
  return (
    <>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 690"
        xmlns="http://www.w3.org/2000/svg"
        className={"transition duration-300 ease-in-out delay-150"}
      >
        <defs>
          <linearGradient id="gradient" x1="100%" y1="54%" x2="0%" y2="46%">
            <stop offset="5%" stopColor="#9900ef"></stop>
            <stop offset="95%" stopColor="#f78da7"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,700 L 0,175 C 79.866028708134,154.63636363636363 159.732057416268,134.27272727272728 253,116 C 346.267942583732,97.72727272727272 452.9377990430622,81.54545454545453 547,114 C 641.0622009569378,146.45454545454547 722.5167464114833,227.5454545454546 813,241 C 903.4832535885167,254.4545454545454 1002.9952153110048,200.27272727272725 1109,178 C 1215.0047846889952,155.72727272727275 1327.5023923444976,165.36363636363637 1440,175 L 1440,700 L 0,700 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="0.53"
          className={"transition-all duration-300 ease-in-out delay-150 path-0"}
          transform="rotate(-180 720 350)"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="100%" y1="54%" x2="0%" y2="46%">
            <stop offset="5%" stopColor="#9900ef"></stop>
            <stop offset="95%" stopColor="#f78da7"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,700 L 0,408 C 72.05741626794256,388.2392344497608 144.1148325358851,368.47846889952154 250,384 C 355.8851674641149,399.52153110047846 495.598086124402,450.32535885167465 598,428 C 700.401913875598,405.67464114832535 765.4928229665071,310.2200956937799 849,323 C 932.5071770334929,335.7799043062201 1034.4306220095693,456.7942583732058 1136,489 C 1237.5693779904307,521.2057416267942 1338.7846889952152,464.6028708133971 1440,408 L 1440,700 L 0,700 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="1"
          className={"transition-all duration-300 ease-in-out delay-150 path-1"}
          transform="rotate(-180 720 350)"
        ></path>
      </svg>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="logoContainer">
          <img src="/src/assets/logo.png" alt="" />
          <h1>EDUVOYAGE</h1>
        </div>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>

          <li onClick={handleCoursesClick}>Courses</li>

          <li onClick={handleContactClick}>Contact</li>

          <li>
            <div className="dropdown">
              <i className={"fa-regular fa-user dropbtn"}></i>
              {token && user ? (
                <>
                  <p className="text-white center">{user.name}</p>
                  <div className="dropdown-content">
                    {user.role === 'student' ? (
                      <>
                        <a onClick={handleMyCoursesNavigate}>MY courses</a>
                        <a onClick={handleLogout}>logout</a>
                      </>
                    ) : ( 
                      <>
                        <a onClick={handleCoursesClick}>Courses Uploaded</a>
                        <a onClick={handleLogout}>logout</a>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <div className="dropdown-content">
                  <a onClick={handleSignUpStudent}>Sign-up as STUDENT</a>
                  <a onClick={handleSignUpInstructor}>Sign-up as INSTRUCTOR</a>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
