import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";


import { Route, Routes } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}
