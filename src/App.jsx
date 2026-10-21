import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Navbar from "./components/Navbar";


function App() {
  return(
    <>
    <Home/>
    <Products/>
  
    </>
  ) 
}

export default App;