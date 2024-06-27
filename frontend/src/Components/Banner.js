import React, { useEffect } from "react";
import Typed from "typed.js";

const Banner = () => {
  useEffect(() => {
    const options = {
      strings: ["Web Developer", "Freelancer"], // Items to type
      typeSpeed: 50, // Typing speed
      backSpeed: 50, // Backspacing speed
      loop: true, // Loop the typing animation
    };

    const typed = new Typed(".typed", options);

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typed.destroy();
    };
  }, []);
  return (
    <div
      id="hero"
      className="hero route bg-image"
      style={{ backgroundImage: "url(img/hero-bg.jpg)" }}
    >
      <div className="overlay-itro" />
      <div className="hero-content display-table">
        <div className="table-cell">
        <div className="container">
        <h1 className="hero-title mb-4">Hi, I am Ajay Gurjar</h1>
        <p className="hero-subtitle">
          <span className="typed" />
        </p>
        {/* <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
