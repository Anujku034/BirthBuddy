import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import Features from "./pages/Features.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from './pages/About.jsx';
import Login from './pages/Login.jsx'
import Register from "./pages/Register.jsx";
function App() {
  return (
    <Routes>
      <Route element ={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
      </Route>
      <Route path="/login" element ={<Login />} />
      <Route path="/signup" element={<Register />}/>
      
    </Routes>
  )
}

export default App
