import React from 'react'
import "./Style.css"

const Home = () => {
  return (
    <div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="layout2.png" class="d-block w-100 img-custom" alt="Slide-1" />
    </div>
    <div class="carousel-item">
      <img src="layout1.png" class="d-block w-100 img-custom" alt="Slide-2" />
    </div>
    <div class="carousel-item">
      <img src="layout3.png" class="d-block w-100 img-custom" alt="Slide-3" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
 
</div>
<br />

<div  id="feature"className="container feature-section">
      <div className="row align-items-center mb-5">
        <div className="col-md-6 text-center">
          <img src="feature1.png" alt="Food 1" className="feature-img img-fluid" />
        </div>
        <div className="col-md-6 feature-text">
          <h3 className="fst-italic">
            Messy kitchen? That’s just a sign of a great chef in action! 🎨🍳</h3>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 feature-text text-adjust">
          <h3 className="fst-italic">
              Good food is like a hug from the inside. 🤗🍲</h3>
        </div>
        <div className="col-md-6 text-center">
          <img src="feature2.png" alt="Food 2" className="feature-img img-fluid custom-round-img" />
        </div>
      </div>
      <div className="row align-items-center mb-5">
        <div className="col-md-6 text-center">
          <img src="feature3.png" alt="Food 3" className="feature-img img-fluid custom-round-img" />
        </div>
        <div className="col-md-6 feature-text">
          <h3 className="fst-italic">
          More cheese? Always the answer. 🧀😋</h3>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 feature-text text-adjust">
          <h3 className="fst-italic">
              We provide recipes. You provide the hungry stomachs! 🤤</h3>
        </div>
        <div className="col-md-6 text-center">
          <img src="feature4.png" alt="Food 4" className="feature-img img-fluid custom-round-img" />
        </div>
      </div>
    </div>
    
<footer className="footer bg-dark text-white text-center py-4">
  <div className="container" id="aboutus">
    <p className="mb-1">© 2025 Delicious Recipes | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
