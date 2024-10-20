import "./contactus.css";
import ContactForm from "./contactform";
import Navbar  from "../nav/Navbar"
const Contact = () => {
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

    <Navbar/>
      <div className="container">
        <div className="contact-content">
          <h1>Contacts</h1>
          <p>
            In the history of modern astronomy, there is probably no one greater
            leap forward than the building.
          </p>
          <div className="breadcrumbs">
            <a href="/">Home</a> ➔ <a href="#">Contacts</a>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-info ">
          <div className="info-item">
            <i className="icon fa fa-home"></i>
            <div>
              <h4>Binghamton, New York</h4>
              <p>4343 Hinkle Deegan Lake Road</p>
            </div>
          </div>
          <div className="info-item">
            <i className="icon fa fa-phone"></i>
            <div>
              <h4>00 (958) 9865 562</h4>
              <p>Mon to Fri 9am to 6 pm</p>
            </div>
          </div>
          <div className="info-item">
            <i className="icon fa fa-envelope"></i>
            <div>
              <h4>support@colorlib.com</h4>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
  
    </>
  );
};

export default Contact;
