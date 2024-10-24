import "./contactus.css";
import ContactForm from "./contactform";
import Navbar  from "../nav/Navbar"
const Contact = () => {
  return (
    <>
   

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
