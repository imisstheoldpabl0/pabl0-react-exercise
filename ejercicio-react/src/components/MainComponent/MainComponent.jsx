import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import TravelList from "./TravelList";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function MainComponent() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/task-manager' element={<TravelList />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
    </main>
  );
}

export default MainComponent;