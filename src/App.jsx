import React from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
