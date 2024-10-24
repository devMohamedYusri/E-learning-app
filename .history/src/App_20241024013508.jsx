import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./componants/home/Home";

import SignUp from "./componants/sign/Sign up";
import InstructorSign from "./componants/sign/instructorSign";
import Login from "./componants/login/login";
import Courses from "./componants/courses/courses.jsx"; 
import Contact from "./componants/contact/Contactus"; 

import Details from "./componants/courseDetails/Details.jsx"; 
import SignUp from "./componants/sign/SignUp";
import InstructorSign from "./componants//sign/instructorSign";
import Login from "./componants/LoginPage/Login";
import Courses from "./componants/courses/courses.jsx"; 
import Contact from "./componants/contact/Contactus"; 
import Footer from "./componants/footer/Footer.jsx";
import Details from "./componants/CourseInfoDetails/Details.jsx"; 
import MyCourses from "./componants/Mycourses/MyCourses.jsx";
>>>>>>> afd2ee8fa574727d4e9feadf5a0a50b524ef0505

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/instructorSign" element={<InstructorSign />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course/details/:id" element={<Details />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} /> 
        <Route path="/my-courses" element ={<MyCourses/>}/>
      </Routes>
      
    </Router>
    
  );
}
