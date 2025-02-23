import React, { useState } from "react";
import "./Signin.css"; // Add a new CSS file for custom styles

const Signin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);
    alert("Signin Successful!");
  };

  return (
    <div className="container mt-5 signin-container">
      <h2 className="text-center mb-4">Sign In</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow signin-form">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" name="username" className="form-control" required onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            required
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
