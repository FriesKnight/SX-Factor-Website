import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Leaders from "./Pages/Leaders";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App
