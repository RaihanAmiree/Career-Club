import React from "react";
import background from "../assets/HomeBG-1.jpg";
import Footer from "../Components/Footer"
import WhatWeDo from "../Components/WhatWeDo";
import OurServices from "../Components/OurServices"
import CVEntry from "../Components/CVEntry";
import PDFEntry from "../Components/PDFEntry";
import Underline from "../Components/Underline";
import ChatbotEntry from "../Components/ChatbotEntry"
import MotivationEntry from "../Components/MotivationEntry"
import CourseEntry from "../Components/CourseEntry"

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full aspect-[16/9] bg-cover bg-center bg-no-repeat text-white font-bold flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Services Page
        </h1>
      </div>
      <OurServices></OurServices>
      <Underline title="Get Services" className="my-20"></Underline>
      <CVEntry></CVEntry>
      <PDFEntry></PDFEntry>
      <ChatbotEntry></ChatbotEntry>
      <MotivationEntry></MotivationEntry>
      <CourseEntry></CourseEntry>
    </>
  )
}

export default Services
