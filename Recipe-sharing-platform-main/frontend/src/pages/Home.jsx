import React, { useEffect } from 'react'
import "./Style.css"

const Home = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      html {
        scroll-behavior: smooth;
        transition: scroll-behavior 1s ease-in-out;
      }
      .img-hover:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease-in-out;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade mb-5">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="layout2.png" className="d-block w-100 img-custom img-hover" alt="Slide-1" />
          </div>
          <div className="carousel-item">
            <img src="layout1.png" className="d-block w-100 img-custom img-hover" alt="Slide-2" />
          </div>
          <div className="carousel-item">
            <img src="layout3.png" className="d-block w-100 img-custom img-hover" alt="Slide-3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div id="feature" className="container feature-section">
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center ">
            <img src="feature1.png" alt="Food 1" className="feature-img img-fluid  img-hover" />
          </div>
          <div className="col-md-6 feature-text text-center">
            <h3 className="fst-italic">
              Messy kitchen? That’s just a sign of a great chef in action! 🎨🍳
            </h3>
          </div>
        </div>
        <div className="row align-items-center mb-5">
          <div className="col-md-6 feature-text text-center">
            <h3 className="fst-italic">
              Good food is like a hug from the inside. 🤗🍲
            </h3>
          </div>
          <div className="col-md-6 text-center ">
            <img src="feature2.png" alt="Food 2" className="feature-img img-fluid rounded shadow img-hover" />
          </div>
        </div>
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center">
            <img src="feature3.png" alt="Food 3" className="feature-img img-fluid rounded shadow img-hover" />
          </div>
          <div className="col-md-6 feature-text text-center">
            <h3 className="fst-italic">
              More cheese? Always the answer. 🧀😋
            </h3>
          </div>
        </div>
        <div className="row align-items-center mb-5">
          <div className="col-md-6 feature-text text-center">
            <h3 className="fst-italic">
              We provide recipes. You provide the hungry stomachs! 🤤
            </h3>
          </div>
          <div className="col-md-6 text-center">
            <img src="feature4.png" alt="Food 4" className="feature-img img-fluid rounded shadow img-hover" />
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
