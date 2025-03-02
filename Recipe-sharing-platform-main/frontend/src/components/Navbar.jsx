import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <img src="logo.png" alt="Bootstrap" width="80" height="60" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active text-dark" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-dark" aria-current="page" href="#feature">Feature</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/signup">Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/signin">Sign in</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#aboutus">About us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
