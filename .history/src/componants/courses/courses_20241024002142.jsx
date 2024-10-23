import "./courses.css";
import Navbar from "../nav/Navbar";
import { useEffect, useState } from "react";
import CourseSlider from "./CourseSlider";
import { fetchAllCourses } from "../../services/api/courses"; 

const Courses = () => {
  const [myCourses, setMyCourses] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await fetchAllCourses(); 
        console.log(data,"courses");
        setMyCourses(data); 
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError(error.message); 
      }
    };

    fetchCourses(); 
  }, []); 

  const filteredCourses = myCourses.filter((course) =>
    course.title && course.title.toLowerCase().includes(searchTerm.toLowerCase()) 
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
              <div key={course.id} className="course-card1">
                <img src={course.img} alt={course.title} />
                <h3>{course.title}</h3>
                <p>Rating: {course.rating} ⭐</p>
                <p>Reviews: {course.reviews}</p>
                <p>Price: ${course.price}</p>
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
