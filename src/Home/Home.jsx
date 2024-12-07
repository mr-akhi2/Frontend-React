import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import bg1 from "../images/bg5.jpg";
import bg2 from "../images/bg2.jpg";
import bg3 from "../images/bg3.jpg";
import bg4 from "../images/bg4.webp";
import bg5 from "../images/bg5.jpg";
import "./home.css";

const Home = () => {
  return (
    <>
      {/* this is carousel */}
      <div className="container-fluid">
        <div className="col-sm-12">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={bg4} className="d-block w-100 img-fluid" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={bg1} className="d-block w-100 img-fluid" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={bg3} className="d-block w-100 img-fluid" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section */}
      <div className="container">
        <h2 className="text text-center">OUR SERVICES</h2>
        <div className="row">
          <div className="col-sm-4">
            <div class="card" style={{ width: "22rem" }}>
              <img src={bg2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Broker & Agent</h5>
                <p class="card-text">
                  Our specialised insurance partner portals and app provide
                  near-real-time visibility into the status of your portfolio
                  with anytime...
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card" style={{ width: "22rem" }}>
              <img src={bg3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Government Business</h5>
                <p class="card-text">
                  We play a role in assisting the successful implementation of
                  various Govt. Schemes by managing different administrative
                  aspects...
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card" style={{ width: "22rem" }}>
              <img src={bg1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Insurer</h5>
                <p class="card-text">
                  We are delighted to have collaborated with insurers across the
                  country to develop a technology-backed strong
                  infrastructure...
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div class="card" style={{ width: "22rem" }}>
              <img src={bg4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Hospital</h5>
                <p class="card-text">
                  We are empaneled with 12,000+ network hospitals, diagnostics
                  centre & labs in 800+ cities, in India. Our members...
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card" style={{ width: "22rem" }}>
              <img src={bg3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Insurance</h5>
                <p class="card-text">
                  We are delighted to have collaborated with insurers across the
                  country to develop a technology-backed strong
                  infrastructure...
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card" style={{ width: "22rem" }}>
              <img src={bg1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Insurance</h5>
                <p class="card-text">
                  We are delighted to have collaborated with insurers across the
                  country to develop a technology-backed strong
                  infrastructure...
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Aboout us */}
      <div
        className="container-fluid mt-5 border text-light"
        style={{ background: "gray" }}
      >
        <h2 className="text text-center text-decoration-underline">About us</h2>
        <div className="col-sm-11">
          <p className=" text text-center">
            Nurturing people lies at the core of our endeavours. When
            individuals reach out to us, they may be grappling with
            unanticipated and taxing situations. Our team members are entrusted
            with the task of extending crucial support and aid. At Vidal Health,
            the essence of caring is mirrored in our commitment to extend
            empathy and assistance to our clients, consumers, and all
            stakeholders alike.
          </p>
        </div>
      </div>

      {/* Contact us */}
      <div className="container mt-5">
        <h2 className="text text-center text-decoration-underline">
          Contact Us
        </h2>
        <div className="row border">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Enter your Name"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Email
              </label>
              <input
                type="Email"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter your Email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <input
                type="submit"
                value="Submit"
                className="form-control bg-primary text-light"
              />
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
      {/* footer */}
      <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
  </footer>
    </>
  );
};

export default Home;
