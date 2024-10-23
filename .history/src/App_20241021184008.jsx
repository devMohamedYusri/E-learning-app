import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./componants/home/Home";
import SignUp from "./componants/sign/Sign up";
import InstructorSign from "./componants/sign/instructorSign";
import Login from "./componants/login/Login";
import Courses from "./componants/courses/courses.jsx"; // Import Courses component
import Contact from "./componants/contact/Contactus"; // Import Contact component
import  Footer  from "./componants/footer/Footer.jsx";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/instructorSign" element={<InstructorSign />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} /> 
      </Routes>
      <Footer/>
    </Router>
    
  );
}
