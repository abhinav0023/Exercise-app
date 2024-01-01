import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
// Importing components from the components folder
import Exercisedetail from "./pages/Exercisedetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/exercise/:id" element={<Exercisedetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
