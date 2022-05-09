// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import React from 'react'
import Insurance from './Screens/insurance';
import Page404 from './Components/404';
import Portfolio from './Screens/portfolio';
// import { Login, DRegister, HRegister, UDashboard, Donar, DashBoard, ADashboard, CDashboard, HomePage,Transplant } from "./Screens/index";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="insurance" element={<Insurance />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Nav></Nav>

    //   {/* <About></About> */}

    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>

    //   </header> */}
    // </div>
  );
}

export default App;



