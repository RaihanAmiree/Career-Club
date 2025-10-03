import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import CVSelection from "./Components/CVSelection"
import CVDesign1 from "./Components/CVDesign1"
import CVDesign2 from "./Components/CVDesign2"
import CVDesign3 from "./Components/CVDesign3"
import CVDesign4 from "./Components/CVDesign4"
import CVDesign5 from "./Components/CVDesign5"
import CVDesign6 from "./Components/CVDesign6"
import PDFEntry from './Components/PDFEntry';
import CareerLibrary from './Components/CareerLibrary';
import Chatbot from "./Components/Chatbot";
import Motivation from "./Components/Motivation"
import Course from "./Components/Course"

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/cvselection" element={<CVSelection />} />
          <Route path="/cv1" element={<CVDesign1 />} />
          <Route path="/cv2" element={<CVDesign2 />} />
          <Route path="/cv3" element={<CVDesign3 />} />
          <Route path="/cv4" element={<CVDesign4 />} />
          <Route path="/cv5" element={<CVDesign5 />} />
          <Route path="/cv6" element={<CVDesign6 />} />
          <Route path="/librarydoor" element={<PDFEntry />} />
          <Route path="/library" element={<CareerLibrary />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="/course" element={<Course />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
