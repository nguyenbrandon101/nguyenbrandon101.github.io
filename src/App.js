import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import NewProj from "./NewProj";

import { Route, Routes } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <NewProj></NewProj>
      <Contact></Contact>
    </div>
  )
}
