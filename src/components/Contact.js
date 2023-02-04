import React, { useState } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import EmailIcon from "@material-ui/icons/Email";

import "../styles/Contact.css";

function Contact() {
  const initialFormData = Object.freeze({
    name: "",
    email: "",
    message: "",
  });

  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div>
      <div className="contact">
        <strong style={{ fontSize: "24px" }}>Leave A Message</strong>
        <form>
          <input
            value={formData.name}
            placeholder="Your Name"
            required
            onChange={handleChange}
            name="name"
          ></input>
          <input
            value={formData.email}
            placeholder="Your Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
          ></input>
          <input
            value={formData.message}
            className="msgbody"
            required
            onChange={handleChange}
            placeholder="Your Message"
            name="message"
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>

      <div className="touch tc">
        <strong style={{ fontSize: "24px", display: "block" }}>
          Get In Touch
        </strong>

        <div>
          <LocationOnIcon />
          <strong style={{ fontSize: "18px", display: "block" }}>
            My Location
          </strong>
          <p>Ayobo Lagos</p>
        </div>
        <div>
          <PhoneEnabledIcon />
          <strong style={{ fontSize: "18px", display: "block" }}>
            Phone Number
          </strong>
          <p>+2349136111944</p>
        </div>
        <div>
          <EmailIcon />
          <strong style={{ fontSize: "18px", display: "block" }}>
            Email Address
          </strong>
          <p>
            <a href="http://dapkolly@gmail.com">nifethedev@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
