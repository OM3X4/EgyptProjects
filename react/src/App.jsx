/* eslint-disable */
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BiPlay } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import React ,{ useEffect, useState } from "react";
import Home from "./Home.jsx"
import { Routes , Route } from "react-router";
import Navbar from "./navbar.jsx";
import Projects from "./Projects.jsx";
import Project from "./Project.jsx";

export default function HomePage() {


  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/project" element={<Project />}/>
      </Routes>
      <section className="flex items-center justify-around h-28 bg-gray-800 flex-row-reverse">
            <h1 className="text-5xl text-white font-bold">تابعنا علي منصات التواصل </h1>
            <div className="flex items-center justify-center gap-5">
                <div className="bg-amber-300 text-3xl rounded-md p-1 hover:text-white hover:bg-amber-700 transition-all cursor-pointer"><AiFillYoutube /></div>
                <div className="bg-amber-300 text-3xl rounded-md p-1 hover:text-white hover:bg-amber-700 transition-all cursor-pointer"><FaXTwitter /></div>
                <div className="bg-amber-300 text-3xl rounded-md p-1 hover:text-white hover:bg-amber-700 transition-all cursor-pointer"><AiOutlineInstagram /></div>
                {/* <div className="bg-amber-300 text-3xl rounded-md p-1 hover:text-white hover:bg-amber-700 transition-all cursor-pointer"><IoLogoSoundcloud /></div> */}
            </div>
      </section>

      <footer className="bg-stone-900 h-16 flex items-center justify-center text-white text-lg">
          هذا الموقع محمي بواسطة reCAPTCHA وتطبق سياسة الخصوصية و بنود الخدمة  الخاصة بـ Google.
      </footer>
    </>
  );
}
