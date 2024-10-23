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
        console.log(data);
        setMyCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError(error.message);
      }
    };

    fetchCourses(); 
  }, []); 

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  const filteredCourses = myCourses.filter((course) =>
    course.name && course.name.toLowerCase().includes(searchTerm.toLowerCase())
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

        {error && <p className="error-message">{error}</p>}

        <div className="course1-container">
          {searchTerm && filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course._id} className="course-card1 w-1/5 p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
                <p className="text-sm text-gray-600 mb-2">Category: {course.category}</p>
                <p className="text-sm text-gray-700 mb-4">{truncateDescription(course.description, 50)}</p>
                <p className="text-sm text-gray-600 mb-2">Instructor ID: {course.instructorId}</p>
                <div className="flex items-center mb-4">
                  <p className="text-sm text-gray-600">Rating: {course.rate} ⭐</p>
                </div>
                <p className="text-lg font-semibold text-gray-800">Price: ${course.price}</p>
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
