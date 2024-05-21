
import AboutUs from "./Components/AboutUs"
import ContactUs from "./Components/ContactUs";

import Footer from "./Components/Footer"
import Home from "./Components/Home";
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Route, Routes, BrowserRouter, } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
