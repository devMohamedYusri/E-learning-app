import "./grid.css"

import {
  FaKey,
  FaFileAlt,
  FaUserGraduate,
  FaCrown,
  FaHeadset,
  FaBriefcase,
} from "react-icons/fa"; // Import icons from react-icons

const features = [
  {
    icon: <FaKey />,
    title: "Lifetime Access",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore.",
  },
  {
    icon: <FaFileAlt />,
    title: "Source File Included",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Student Membership",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore.",
  },
  {
    icon: <FaCrown />,
    title: "Expert Mentors",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore.",
  },
  {
    icon: <FaHeadset />,
    title: "Live Supports",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore.",
  },
  {
    icon: <FaBriefcase />,
    title: "Job Opportunities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt labore.",
  },
];

const FeatureGrid = () => {
  return (
    <div className="feature-grid">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;