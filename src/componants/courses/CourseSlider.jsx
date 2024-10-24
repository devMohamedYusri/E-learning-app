
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./course.css";

export default function CourseSlider({ courses,category }) {
  console.log(courses,"form slider courses");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <div className="course-category">
        <h2>{category}</h2>
        <Slider {...settings}>
          {courses.map((course) => (
            <div key={course._id} className="course-card">
              <img src={course.img} alt={course.name} />
              <h3>{course.name}</h3>
              <p>Category: {course.category}</p>
              <p>Description: {course.description}</p>
              <p>Instructor ID: {course.instructorId}</p>
              <p>Price: £{course.price}</p>
              <p>Rating: {course.rate}⭐️</p>
              <Link to={`/course/details/${course._id}`} className="details-btn">
                <b>View </b>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}