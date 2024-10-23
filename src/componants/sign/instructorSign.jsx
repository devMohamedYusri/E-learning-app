import "./sign.css";
import Logo from "../logo/logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/api/authorization"; 

const InstructorSign = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters and include both letters and numbers";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        const response = await registerUser(formData); 
        console.log("Form submitted successfully:", response);
        navigate("/instructor"); 
      } catch (err) {
        setErrors({ server: err.message }); 
      }
    }
  };

  return (
    <div className="all">
      <Logo />
      <div className="sign-up">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          {errors.server && <p className="error">{errors.server}</p>}{" "}
         
          <button className="button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default InstructorSign;
