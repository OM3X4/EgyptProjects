/* eslint-disable */
import React ,{ useEffect, useState } from "react";
import Home from "./Home.jsx"
import { Routes , Route } from "react-router";
import Navbar from "./navbar.jsx";

export default function HomePage() {


  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  );
}
