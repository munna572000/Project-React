import React from "react";
import Home from "./Components/MenuBar/Pages/Home";
import About from "./Components/MenuBar/Pages/About";
import Contact from "./Components/MenuBar/Pages/Contact";
import Login from "./Components/MenuBar/Pages/LogIn";
import SinUp from "./Components/MenuBar/Pages/SinUp";
import NavBar from "./Components/MenuBar/NavBar";




import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/contact/:fname" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signup" element={<SinUp />} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
