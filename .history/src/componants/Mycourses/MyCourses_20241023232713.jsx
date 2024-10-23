import "../Mycourses/"; // Add a CSS file for styling
import Navbar from "../nav/Navbar"; // Import Navbar
import { useState } from "react"; // Import useState for state management

const MyCourses = () => {
  const myCourses = [ // Sample data for My Courses
    {
      id: 1,
      title: "Learn Laravel: A Guided Path For Beginners",
      rating: 4.2,
      reviews: 9969,
      price: 249.99,
      img: "src/assets/larave.png",
    },
    {
      id: 2,
      title: "The Complete Angular Course",
      rating: 4.4,
      reviews: 72269,
      price: 449.99,
      img: "/src/assets/angular.png",
    },
    // ... add more courses as needed
  ];

  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  const filteredCourses = myCourses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="blog-content">
          <h1>My Courses</h1>
          <p className="prag1">Here are the courses you are enrolled in:</p>
          <div className="breadcrumbs">
            <a href="/">Home</a> ➔ <a href="#">My Courses</a>
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
            placeholder="Search for your courses"
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
            <p className="txt-search">Start typing to search for your courses.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MyCourses;
