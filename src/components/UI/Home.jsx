// Home.js
import React from "react";
import Hero from "./Hero";
import Counter from "./Counter";
import Services from "./Services";
import About from "./About";
import Team from "./Team";
import Blog from "./Blog";
import Testimonial from "./Testimonial";
import Newsletter from "./Newsletter";
import Footer from "../Footer/Footer";

const Home = ({ theme }) => {
  return (
    <>
      <Hero theme={theme} />
      <Counter />
      <Services />
      <About />
      <Team />
      <Blog />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
