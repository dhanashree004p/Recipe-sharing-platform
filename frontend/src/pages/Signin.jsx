import React, { useState } from "react";

const Signin = () => {
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Data:", formData);
    alert("Sign In Successful!");
  };

  return (
    <div className="container mt-5" style={{ width: "400px" }}>
      <h2 className="text-center">Sign In</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
        <div className="mb-3">
          <label className="form-label">Email or Username</label>
          <input
            type="text"
            name="emailOrUsername"
            className="form-control"
            required
            onChange={handleChange}
          />
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
