import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./componants/home/Home";

import InstructorDashboard from "./pages/InstructorDashboard.jsx";
import AddEditCourse from "./pages/AddEditCourse.jsx"; 
import SignUp from "./componants/sign/SignUp.jsx";
import InstructorSign from "./componants//sign/instructorSign.jsx";
import Login from "./componants/LoginPage/login.jsx";
import Courses from "./componants/courses/courses.jsx"; 
import Contact from "./componants/contact/Contactus"; 

import Details from "./componants/CourseInfoDetails/Details.jsx"; 
import MyCourses from "./componants/Mycourses/MyCourses.jsx";

export default function App() {
  const [courses, setCourses] = useState([]);

  const handleDeleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course.id !== courseId));
  };

  const handleSaveCourse = (newCourseData) => {
    if (newCourseData.id) {
      setCourses(
        courses.map((course) =>
          course.id === newCourseData.id ? newCourseData : course
        )
      );
    } else {
      setCourses([...courses, { ...newCourseData, id: courses.length + 1 }]);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/instructorSign" element={<InstructorSign />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/instructor-dashboard"
          element={
            <InstructorDashboard
              courses={courses}
              onDelete={handleDeleteCourse}
            />
          }
        />

        <Route
          path="/add-course"
          element={<AddEditCourse onSave={handleSaveCourse} />}
        />

        <Route
          path="/edit-course/:courseId"
          element={
            <AddEditCourse courses={courses} onSave={handleSaveCourse} />
          }
        />
        
        <Route path="/course/details/:id" element={<Details />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} /> 
        <Route path="/my-courses" element ={<MyCourses/>}/>
      </Routes>
      
    </Router>
  );
}
