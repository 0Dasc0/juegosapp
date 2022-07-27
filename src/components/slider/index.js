import React from "react";
import './slider.css';
import Carousel from 'react-bootstrap/Carousel';
import f1 from "./1.jpg";
import f2 from "./2.jpg";
import f3 from "./3.jpg";



function Slider  () {
    return (
        <div class="l">
            <br></br>
            <Carousel fade class="carrusel">
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={f1}
          alt="First slide"
          class="imgs"
        />

      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={f2}
          alt="Second slide"
          class="imgs"
        />


      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={f3}
          alt="Third slide"
          class="imgs"
        />


      </Carousel.Item>
    </Carousel>
    

    </div>
    )
  }
  
  export default Slider