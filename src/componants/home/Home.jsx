import Slider from "./slider/slider"
import FeatureGrid from "./grid/grid"
import Navbar from "../nav/Navbar";
import "./home.css"
// import Image from "../../assets/undraw_Educator_re_ju47.png";
import CustomSlider from "./reviwe/rev"
import Features from "./feature/feature"

function Home() {
  return (
    <>
     
      <div className="header">
        {/* <h1>Take the first step to learn with us</h1> */}
        {/* <img src={Image}></img> */}
      </div>
      <Navbar />
      <div className="s-part">
        <div className="s-part-1">
          <i className="fa-solid fa-book-open"></i>
          <h2>New Classes</h2>
          <p>
            Unlock your potential with our new e-learning classes! Explore fresh
            topics and elevate your skills today!
          </p>
        </div>
        <div className="s-part-2">
          <i className="fa-solid fa-trophy"></i>
          <h2>Top Courses</h2>
          <p>
            Discover our top courses and elevate your skills today! Join the
            learning revolution!
          </p>
        </div>
        <div className="s-part-3">
          <i className="fa-solid fa-desktop"></i>
          <h2>Full E-Books</h2>
          <p>
            Access a library of full e-books and enhance your learning journey
            today!
          </p>
        </div>
      </div>
      <Slider />
      <div className="grid">
        <h2>Features That Can Avail By Everyone</h2>
        <p style={{ maxWidth: "400px" }}>
          If you are looking at blank cassettes on the web, you may be very
          confused at the difference in price. You may see some for as low as
          $.17 each.
        </p>
        <FeatureGrid />
      </div>
      <CustomSlider />
      <Features/>
    </>
  );
}

export default Home;
