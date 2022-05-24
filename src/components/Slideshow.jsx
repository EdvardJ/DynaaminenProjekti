import React from "react";
import img1 from "../static_files/img1.jpg";
import img2 from "../static_files/img2.jpg";
import img3 from "../static_files/img3.jpg";

let slideIndex = 0;
 showSlides();

function showSlides() {

  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block"; // This line somehow makes whole site crash - work in progress.

  setTimeout(showSlides, 5000); // Change image every 2 seconds
  
} 



const Slideshow = () => {

  return (
  <div class="container">
  
    <div class="mySlides">
      <div class="numbertext"></div>
      <img src={img1} alt="1"></img>
    </div>

    <div class="mySlides">
    <img src={img2} alt="2"></img>
    </div>

    <div class="mySlides">
    <img src={img3} alt="3"></img>
    </div>
    
  </div> 
  
  );
  
}

export default Slideshow;
