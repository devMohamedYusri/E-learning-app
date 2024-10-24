

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
        "As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face and She is the host to your journey.",
      author: "Fanny Spencer",
      title: "Chief Executive, Amazon",
    },
    {
      quote:
        "As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face and She is the host to your journey.",
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
                <p style={styles.quoteText}>{slide.quote}</p>
                <p>
                  <strong style={styles.authorText}>{slide.author}</strong>
                  <br />
                  {slide.title}
                </p>
              </div>
              <div style={styles.imageContainer}>
                <img src={img} alt="Placeholder" style={styles.image} />
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
  return <div className={`${className} arrow`} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} arrow`} onClick={onClick} />;
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
    width: "90%", // Adjust width for responsiveness
    maxWidth: "1200px", // Set a maximum width
    margin: "auto",
    padding: "20px 0", // Add padding for better spacing
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
  quoteText: {
    fontSize: "1.25rem", // Use relative units for better scalability
    fontWeight: "bold",
    color: "black",
  },
  authorText: {
    color: "brown",
  },
};

// Add responsive styling via media queries
const mediaQueries = `
  @media (max-width: 1024px) {
    ${styles.cardContent} {
      flex-direction: column; // Stack text and image on smaller screens
      align-items: flex-start;
    }
    
    ${styles.imageContainer} {
      text-align: center; // Center image on smaller screens
      margin-top: 10px; // Add margin for spacing
    }
    
    ${styles.quoteText} {
      font-size: 1.1rem; // Decrease font size for smaller screens
    }
  }

  @media (max-width: 600px) {
    ${styles.sliderContainer} {
      padding: 10px 0; // Reduce padding on very small screens
    }
    
    ${styles.card} {
      padding: 5px; // Reduce padding on very small screens
    }
  }
`;

// Append media queries to the document head
const styleElement = document.createElement("style");
styleElement.innerHTML = mediaQueries;
document.head.appendChild(styleElement);

export default CustomSlider;
