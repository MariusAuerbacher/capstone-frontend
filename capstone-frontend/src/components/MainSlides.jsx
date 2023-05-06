import React from "react";
import { Carousel } from "react-bootstrap";
import "../css/MainSlides.css"
import Vision from "./Vision";
import Map from "./Map"



const MainSlides = () => {
  return (
    <>
     <Carousel>
  <Carousel.Item>
    <img
      className="d-block carousel-images w-100"
      src= "https://images.unsplash.com/photo-1594841359067-31caf8216011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVmdWdlZSUyMGNhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-images"
      src=   
      "https://images.unsplash.com/photo-1619569124496-4f35021bdbf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVmdWdlZSUyMGNhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"  
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-images"
      src= "https://images.unsplash.com/photo-1637034132661-4f015591b84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFpZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>test</h3>
      <p>test</p>
    </Carousel.Caption>
  </Carousel.Item>

<Carousel.Item>
    <img
      className="d-block w-100 carousel-images"
      src="https://images.unsplash.com/photo-1657701748761-390049907d8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9oaW5neWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Kutupalong refugee camp</h3>
      <p>The world's largest refugee camp</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Vision/>
<Map/>
    </>
  );
};

export default MainSlides;
