import "./courses.css";
import Navbar from "../nav/Navbar";
import { useState } from "react";
import CourseSlider from "./CourseSlider";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Learn Laravel:A Guided Path For Beginners ",
      rating: 4.2,
      reviews: 9969,
      price: 249.99,
      img: "src/assets/larave.png",
      category: "web",
    },
    {
      id: 2,
      title: "The Complete Angular Course",
      rating: 4.4,
      reviews: 72269,
      price: 449.99,
      img: "/src/assets/angular.png",
      category: "web",
    },
    {
      id: 3,
      title: "The Complete React Course",
      rating: 4.5,
      reviews: 1735,
      price: 249.99,
      img: "/src/assets/react.png",
      category: "web",
    },
    {
      id: 4,
      title: "Learn Front-end Development",
      rating: 4.5,
      reviews: 1735,
      price: 249.99,
      img: "/src/assets/frontend_dev.png",
      category: "web",
    },
    {
      id: 5,
      title: "Learn Python Programming Masterclass ",
      rating: 4.8,
      reviews: 5521,
      price: 299.99,
      img: "/src/assets/Python.jpg",
      category: "Programming Language",
    },
    {
      id: 6,
      title: "Complete C++ Masterclass",
      rating: 4.7,
      reviews: 6233,
      price: 199.99,
      img: "/src/assets/cpp.png",
      category: "Programming Language",
    },
    {
      id: 7,
      title: "Complete C# Masterclass ",
      rating: 4.7,
      reviews: 6233,
      price: 199.99,
      img: "/src/assets/c-sharp.jpg",
      category: "Programming Language",
    },
    {
      id: 8,
      title: "The Complete Javascript Course",
      rating: 4.7,
      reviews: 6233,
      price: 199.99,
      img: "/src/assets/js.jpg",
      category: "Programming Language",
    },
    {
      id: 9,
      title: "MySQL for Beginner to Advanced",
      rating: 4.7,
      reviews: 6233,
      price: 199.99,
      img: "/src/assets/mysql.png",
      category: "Programming Language",
    },
    {
      id: 10,
      title: "Learn JAVA Programming -Beginner to Master",
      rating: 4.7,
      reviews: 6233,
      price: 199.99,
      img: "/src/assets/java.png",
      category: "Programming Language",
    },
  ];

  const webCourses = courses.filter((course) => course.category === "web");
  const programmingCourses = courses.filter(
    (course) => course.category === "Programming Language"
  );
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    
    

      <Navbar/>
    
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
            webCourses={webCourses}
            programmingCourses={programmingCourses}
          />
        </div>
      </div>
    </>
  );
};

export default Courses;
