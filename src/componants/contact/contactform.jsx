import { useState } from "react";
import './form.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState(""); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://example.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setStatus("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatus("Something went wrong. Please try again.");
      });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form">
        <div className="inputs">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Enter Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button type="submit" className="send-message-btn">
        SEND MESSAGE
      </button>

      {status && <p className="status-message">{status}</p>}
    </form>
  );
}
