
import "./feature.css";
import ig1 from "../../../assets/ig.jpg";
import ig2 from "../../../assets/ig.png";
import ig from "../../../assets/ig3.png";
const Features = () => {
  const data = [
    {
      date: "29th, OCT, 2018",
      likes: 121,
      comments: 5,
      title: "Interactive Courses",
      description:
        "Engage in dynamic lessons with videos, quizzes, and interactive content for better retention.",
      img: ig1,
    },
    {
      date: "29th, OCT, 2018",
      likes: 121,
      comments: 5,
      title: "Progress Tracking",
      description:
        "Monitor your learning journey with real-time progress reports and achievement badges.",
      img: ig2, 
    },
    {
      date: "29th, OCT, 2018",
      likes: 121,
      comments: 5,
      title: "24/7 Accessibility",
      description:
        "Learn anytime, anywhere with mobile-friendly access to courses and materials.",
      img: ig,
    },
  ];

  return (
    <section className="features-section">
      <h2>Features of an E-Learning Website</h2>
      <p>
        Unlock the power of knowledge with these key features designed for
        seamless learning:
      </p>
      <div className="features-container">
        {data.map((item, index) => (
          <div className="featureCard" key={index}>
            <img src={item.img} alt={item.title} className="feature-image" />
            <div className="feature-info">
              <div className="date-box">
                <span>{item.date}</span>
                <span>{item.likes} Likes</span>
                <span>{item.comments} Comments</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#" className="view-details">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
