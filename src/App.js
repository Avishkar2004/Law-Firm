import React from "react";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import Skills from "./components/Skills";
import Team from "./components/Team";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BackToTopBtn } from "./components/BackToTopBtn";

// import components

const App = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      <Skills />
      <Team />
      <Newsletter />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>
  );
};

export default App;
