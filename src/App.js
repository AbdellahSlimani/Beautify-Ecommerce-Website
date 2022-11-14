import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Loader from "./components/Loader/Loader";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import Testimonials from "./components/Testimonials/Testimonials";
import Virtual from "./components/Virtual/Virtual";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App ">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Hero />
          <Slider />
          <Virtual />
          <Products />
          <Testimonials />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
