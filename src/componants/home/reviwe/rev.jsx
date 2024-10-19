

import img from "../../../assets/t1.jpg"; 
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const slides = [
    {
      quote:
        "As conscious traveling Paup ers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face and She is the host to your journey.",
      author: "Fanny Spencer",
      title: "Chief Executive, Amazon",
    },
    {
      quote:
        "As conscious traveling Paup ers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face and She is the host to your journey.",
      author: "Fanny Spencer",
      title: "Chief Executive, Amazon",
    },
  ];

  return (
    <div className="slider-container" style={styles.sliderContainer}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide" style={styles.card}>
            <div style={styles.cardContent}>
             
              <div style={styles.textContainer}>
                
                <p style={{fontSize:"20px",fontWeight:"bold",color:"black"}}>{slide.quote}</p>
                <p>
                  <strong style={{color:"brown"}}>{slide.author}</strong>
                  <br />
                  {slide.title}
                </p>
              </div>

              
              <div style={styles.imageContainer}>
                <img
                  src={img}
                  alt="Placeholder"
                  style={styles.image}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};


const styles = {
  sliderContainer: {
    width: "70%",
    margin: "auto",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    border: "1px solid #ddd",
    margin: "10px",
   
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    
  },
  textContainer: {
    flex: 1,
    paddingRight: "20px",
    fontSize: "20px",
    
  },
  imageContainer: {
    flex: 1,
    textAlign: "right",
  },
  image: {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "8px",
  },
};

export default CustomSlider;