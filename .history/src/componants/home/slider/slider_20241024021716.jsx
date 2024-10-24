import "./slider.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import angularImage from "../../../assets/angular.png";
import reactImage from "../";
import jsImage from "../../../assets/js.jpg";
import bootstrapImage from "../../../assets/bootstrap.jpg";

const courses = [
  {
    title: "Learn Angular JS Course for Legendary Persons",
    price: "$150",
    reviews: "25 Reviews",
    image: angularImage,
  },
  {
    title: "Learn REACT Course for Legendary Persons",
    price: "$150",
    reviews: "25 Reviews",
    image: reactImage,
  },
  {
    title: "Learn JavaScript Course for Legendary Persons",
    price: "$150",
    reviews: "25 Reviews",
    image: jsImage,
  },
  {
    title: "Learn Bootstrap Course for Legendary Persons",
    price: "$150",
    reviews: "25 Reviews",
    image: bootstrapImage,
  },
];

const CourseSlider = () => {
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h2>Available Courses</h2>
      <Slider {...settings}>
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt="Course" />
            <div className="course-info">
              <p>{course.title}</p>
              <p>{course.price}</p>
              <p>{course.reviews}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CourseSlider;
