import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./componants/home/Home";

import InstructorDashboard from "./pages/InstructorDashboard"; // Instructor Courses Page
import AddEditCourse from "./pages/AddEditCourse"; // Add/Edit Courses page
import SignUp from "./componants/sign/SignUp";
import InstructorSign from "./componants//sign/instructorSign";
import Login from "./componants/LoginPage/Login";
import Courses from "./componants/courses/courses.jsx"; 
import Contact from "./componants/contact/Contactus"; 
import Footer from "./componants/footer/Footer.jsx";
import Details from "./componants/CourseInfoDetails/Details.jsx"; 
import MyCourses from "./componants/Mycourses/MyCourses.jsx";

export default function App() {
  // Saving Courses data
  const [courses, setCourses] = useState([]);

  // Delete A Course Function
  const handleDeleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course.id !== courseId));
  };

  // Add/Edit Course Function
  const handleSaveCourse = (newCourseData) => {
    if (newCourseData.id) {
      // Edit Course
      setCourses(
        courses.map((course) =>
          course.id === newCourseData.id ? newCourseData : course
        )
      );
    } else {
      // Add A New Course
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
      <Footer />
    </Router>
  );
}
