import React from 'react'
import elctrical from '../assets/elctrical.jpg';
import painting from '../assets/painting.png';
import carwash from '../assets/car wash1.jpg';
import './Carosuel.css';



const Carosuel = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={elctrical} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                            <img src={carwash} />
                            <h5>Electrical Services</h5>
                            <p>Professional electrical services for your home and office</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={painting} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                            <h5>Painting Services</h5>
                            <p>High-quality painting services for your property</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carwash} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
                            <h5>Car Wash Services</h5>
                            <p>Top-notch car wash services at your convenience</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carosuel
