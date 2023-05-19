import React from "react";
import { Carousel } from "react-bootstrap";
import "../css/MainSlides.css";
import Vision from "./Vision";
import { useNavigate } from "react-router-dom";
import Map from "./Map"

const MainSlides = () => {
  const navigate = useNavigate();
  const onDonateHandler = () => {
    navigate("/payment");
  };
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel-images"
            src="https://oneummah.org.uk/wp-content/uploads/2020/03/DSC08264-scaled.jpg"
            alt="First slide"
          />

          <Carousel.Caption className="d-flex">
        
      

            <div className="slides-first">
              <p className="slides-large-text-top text-start slides-first">DIRECT</p>
          <p className="slides-large-text-top text-start slides-first">EFFICIENT</p>
          <p className="slides-large-text-top text-start slides-first">PERSONAL</p>
          </div> 
            
           
            <button className="d-row carousel-button" onClick={onDonateHandler}>
              Donate Now
            </button>

        
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-images img-fluid"
            src="https://images.unsplash.com/photo-1540126281354-f549412ac6b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />

        
<Carousel.Caption className="d-flex">

<div>
              <p className="slides-large-text-top text-start">DIRECT</p>
          <p className="slides-large-text-top text-start">EFFICIENT</p>
          <p className="slides-large-text-top text-start">PERSONAL</p>
          </div> 
            
           
            <button className="d-row carousel-button slides-last" onClick={onDonateHandler}>
              Donate Now
            </button>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-images img-fluid"
            src="https://images.unsplash.com/photo-1626303411299-1e7b326cf47b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVmdWdlZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Third slide"
          />

         
<Carousel.Caption className="d-flex">

<div>
              <p className="slides-large-text-top text-start">DIRECT</p>
          <p className="slides-large-text-top text-start">EFFICIENT</p>
          <p className="slides-large-text-top text-start">PERSONAL</p>
          </div> 
            
           
            <button className="d-row carousel-button" onClick={onDonateHandler}>
              Donate Now
            </button>

          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-images img-fluid"
            src="https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ2fHxjaGFyaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            
            alt="Third slide"
          />

         
<Carousel.Caption className="d-flex">

<div>
              <p className="slides-large-text-top text-start">DIRECT</p>
          <p className="slides-large-text-top text-start">EFFICIENT</p>
          <p className="slides-large-text-top text-start">PERSONAL</p>
          </div> 
            
   
            <button className="carousel-button slides-last" onClick={onDonateHandler}>
              Donate Now
            </button>
       
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Vision />
      <Map/>
    </>
  );
};

export default MainSlides;
