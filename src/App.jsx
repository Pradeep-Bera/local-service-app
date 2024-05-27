
import { useState } from "react";
import AboutUs from "./Components/AboutUs"
import ContactUs from "./Components/ContactUs";

import Footer from "./Components/Footer"
import Home from "./Components/Home";
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Carosuel from "./Components/Carosuel";
import './App.css';
import VideoSection from "./Components/VideoSection";
import Registration from "./Components/Registration";





const App = () => {
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setTheme('dark')
      document.body.style.backgroundColor = 'white';

    }


  }

  return (
    <>
      <Router>
        <Navbar theme={theme} changeTheme={changeTheme} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/carosuel" element={<Carosuel />} />
            <Route path="/video" element={<VideoSection />} />
            <Route path="/signUp" element={<Registration />} />


          </Routes>
        </div>
        <Footer className="footer" />
      </Router>
    </>
  )
}

export default App
