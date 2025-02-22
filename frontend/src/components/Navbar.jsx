import React from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container d-flex justify-content-between">
    
      <Link className="navbar-brand" to="/">
          <img src="logo.png" alt="Bootstrap" width="80" height="60" />
        </Link>

      
      <ul class="nav">
        <li class="nav-item">
          <Link class="nav-link active text-dark" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-dark" aria-current="page" href="#feature">Feature</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-dark" to="/signup">Sign up</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-dark" to="/signin">Sign in</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#aboutus">About us</a>
        </li>
      </ul>
    </div>
  </nav>
</div>

  )
}

export default Navbar
