import React from "react";
import background from "../assets/HomeBG-1.jpg";
import WhatWeDo from "../Components/WhatWeDo"
import Moto from "../Components/Moto";
import Stats from "../Components/Stats";
import Footer from "../Components/Footer";
import AccordionSection from "../Components/AccordionSection.jsx"
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full aspect-[16/9] bg-cover bg-center bg-no-repeat text-white font-bold flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Home Page
        </h1>
      </div>

     <Moto></Moto>
     <Stats></Stats>
      <WhatWeDo />
      <AccordionSection></AccordionSection>
    </>
  );
};

export default Home;
