import React from "react";
import { Carousel } from "react-bootstrap";
import "../css/MainSlides.css"
import Vision from "./Vision";
import { useNavigate } from "react-router-dom";
//import Map from "./Map"



const MainSlides = () => {
  const navigate = useNavigate()
  const onDonateHandler = () => {
navigate("/payment")
  }
  return (
    <>
     <Carousel>
  <Carousel.Item>
    <img
    className="carousel-images"
      src= "https://images.unsplash.com/photo-1657701748761-390049907d8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVmdWdlZSUyMGNhbXBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
      alt="First slide"
    />
    <Carousel.Caption>
     <button className="carousel-button mt-5" onClick={onDonateHandler}>Donate Now</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel-images img-fluid"
      src=   
      "https://images.unsplash.com/photo-1608052026785-0bc249c733e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVmdWdlZSUyMGNhbXBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"  
      alt="Second slide"
    />

    <Carousel.Caption>
    <button className="carousel-button mt-5" onClick={onDonateHandler}>Donate Now</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel-images img-fluid"
      src= "https://images.unsplash.com/photo-1626303411299-1e7b326cf47b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVmdWdlZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      alt="Third slide"
    />

    <Carousel.Caption>
    <button className="carousel-button mt-5" onClick={onDonateHandler}>Donate Now</button>
    </Carousel.Caption>
  </Carousel.Item>

<Carousel.Item>
    <img
      className="carousel-images img-fluid"
      src="https://oneummah.org.uk/wp-content/uploads/2020/03/DSC08264-scaled.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <button className="carousel-button mt-5" onClick={onDonateHandler}>Donate Now</button>
    </Carousel.Caption>
   
  </Carousel.Item>
</Carousel>
<Vision/>
 {/*<Map/>*/}
    </>
  );
};

export default MainSlides;
