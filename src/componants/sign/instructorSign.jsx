import "./sign.css";
import Logo from "../logo/logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/api/authorization"; 

const InstructorSign = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: 'instructor' 
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

    if (!formData.name) newErrors.name = "name is required";
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
        console.log(formData,"this; the form data");
        const response = await registerUser(formData); 
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate("/instructor-dashboard"); 
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
            <label>name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
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
        <p className="login-link">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default InstructorSign;
