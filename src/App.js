import React from "react";
import './index.css';

import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Yacht from "./routes/Yacht";
 
export default function App() {
  return (
    <>
    <Routes>  
      <Route to='/' element={<Home />}/>
      <Route to='/About' element={<About />}/>
      <Route to='/Yacht' element={<Yacht />}/>
      <Route to='/Contact' element={<Contact />}/>
    </Routes>
    </>
  );
}

