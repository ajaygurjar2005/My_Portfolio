import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "glightbox/dist/css/glightbox.min.css";
import Footer from "./Footer";
import Contact from "./Contact";
import Blog from "./Blog";
import Testimonial from "./Testimonial";
import PortfolioSection from "./PortfolioSection";
import Counter from "./Counter";
import Services from "./Services";
import About from "./About";
import Banner from "./Banner";
import Header from "./Header";

const Homepage = () => {
  return (
    <div>
        <Banner />
        <About />
        <Services />
        <Counter />
        <PortfolioSection />
        <Testimonial />
        <Blog />
        <Contact />
    </div>
  );
};

export default Homepage;
