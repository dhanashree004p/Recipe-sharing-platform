import React, { useState } from "react";


const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }


    if (!validatePassword(formData.password)) {
      alert(
        "Password must be at least 8 characters long, contain at least 1 uppercase letter, 1 number, and 1 special character."
      );
      return;
    }

    console.log("Form Submitted:", formData);
    alert("Signup Successful!");
    
  };

  return (
    <div className="container mt-5" style={{ width: "600px" }}>
      <h2 className="text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
       
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" name="name" className="form-control" required onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" required onChange={handleChange} />
        </div>

    
        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input type="tel" name="contact" className="form-control" required onChange={handleChange} />
        </div>

       
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
            placeholder="Must have 1 uppercase, 1 number, 1 special character"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input type="password" name="confirmPassword" className="form-control" required onChange={handleChange} />
        </div>

        <button type="submit"  to="/signin" className="btn btn-dark w-100">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
