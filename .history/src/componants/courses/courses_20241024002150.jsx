import "./courses.css";
import Navbar from "../nav/Navbar";
import { useEffect, useState } from "react";
import CourseSlider from "./CourseSlider";
import { fetchAllCourses } from "../../services/api/courses"; // Ensure this import is correct

const Courses = () => {
  const [myCourses, setMyCourses] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [error, setError] = useState(null); // State to hold error messages

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await fetchAllCourses(); // Fetch courses using the API service
        setMyCourses(data); // Set the fetched courses to state
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError(error.message); // Set error message to state
      }
    };

    fetchCourses(); 
  }, []); 

  const filteredCourses = myCourses.filter((course) =>
    course.name && course.name.toLowerCase().includes(searchTerm.toLowerCase()) // Check if name exists
  );

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="blog-content">
          <h1>Courses</h1>
          <p className="prag1">In the history of modern astronomy...</p>
          <div className="breadcrumbs">
            <a href="/">Home</a> ➔ <a href="#">Courses</a>
          </div>
        </div>

        <div
          className="search-bar"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Search for courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "10px",
              width: "50%",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {error && <p className="error-message">{error}</p>} {/* Display error message if exists */}

        <div className="course1-container">
          {searchTerm && filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course._id} className="course-card1"> {/* Use _id as the key */}
                <h3>{course.name}</h3> {/* Display course name */}
                <p>Category: {course.category}</p> {/* Display course category */}
                <p>Description: {course.description}</p> {/* Display course description */}
                <p>Instructor ID: {course.instructorId}</p> {/* Display instructor ID */}
                <p>Rating: {course.rate} ⭐</p> {/* Display course rating */}
                <p>Price: ${course.price}</p> {/* Display course price */}
              </div>
            ))
          ) : searchTerm ? (
            <p className="txt-search">No courses found matching your search.</p>
          ) : (
            <p className="txt-search">Start typing to search for courses.</p>
          )}
        </div>

        <div className="course-container">
          <CourseSlider
            webCourses={myCourses.filter(course => course.category === "web")}
            programmingCourses={myCourses.filter(course => course.category === "Programming Language")}
          />
        </div>
      </div>
    </>
  );
};

export default Courses;
