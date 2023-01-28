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
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Yacht' element={<Yacht />}/>
      <Route path='/Contact' element={<Contact />}/>
    </Routes>
    </>
  );
}

