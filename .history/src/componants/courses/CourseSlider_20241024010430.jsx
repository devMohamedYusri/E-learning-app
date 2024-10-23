// CourseSlider.js
import { Link } from "react-router-dom";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./course.css";

export default function CourseSlider({ webCourses, programmingCourses,category }) {
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
          {webCourses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.img} alt={course.title} />
              <h3>{course.title}</h3>
              <p>
                Rating: {course.rating}⭐️ ({course.reviews} reviews)
              </p>
              <p>Price: £{course.price}</p>
              <Link to={`/course/details/${course.id}`} className="details-btn">
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

CourseSlider.propTypes = {
  webCourses: PropTypes.array.isRequired,
  programmingCourses: PropTypes.array.isRequired,
};
