import "./sign.css";
import Logo from "../logo/logo";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../services/api/authorization"; 

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    grade: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    const passwordRegex = /^(?=.*\d).{8,}$/;

    if (!formData.name) newErrors.name = "name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters and include a number";
    }
<<<<<<< HEAD:src/componants/sign/Sign up.jsx
    if (!formData.password) newErrors.password = "Password is required";
=======
>>>>>>> afd2ee8fa574727d4e9feadf5a0a50b524ef0505:src/componants/sign/SignUp.jsx
    if (!formData.grade) newErrors.grade = "Please select a grade";
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
        console.log("form submitted successfully", response);
        
        if (response.token && response.user) {
            localStorage.setItem("token", response.token);
            localStorage.setItem("user", JSON.stringify(response.user));
        } else {
            console.error("Unexpected response structure", response);
        }
        navigate("/courses");
      } catch (error) {
        console.error("Error submitting the form:", error.message);
        setErrors({ general: error.message });
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
          <div>
            <label>Select Grade</label>
            <select name="grade" value={formData.grade} onChange={handleChange}>
              <option value="">Select your grade</option>
              <option value="grade-1">Grade 1</option>
              <option value="grade-2">Grade 2</option>
              <option value="grade-3">Grade 3</option>
              <option value="grade-4">Grade 4</option>
              <option value="grade-5">Grade 5</option>
            </select>
            {errors.grade && <p className="error">{errors.grade}</p>}
          </div>
          <button className="button" type="submit">
            Sign Up
          </button>
        </form>

        <p className="login-link">
<<<<<<< HEAD:src/componants/sign/Sign up.jsx
          Already have an account? <Link to="../login/login">Log in</Link>
=======
          Already have an account? <a href="/login">Log in</a>
>>>>>>> afd2ee8fa574727d4e9feadf5a0a50b524ef0505:src/componants/sign/SignUp.jsx
        </p>
      </div>
    </div>
  );
};

export default SignUp;
