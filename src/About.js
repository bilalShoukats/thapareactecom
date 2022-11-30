// import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
// import { AppContext } from "./context/productcontext";
import { useProduContext  } from "./context/productcontext";

const About = () => {
//const myname = useContext(AppContext)
const myname = useProduContext ()

  const data = {
    name: "Bilal Ecommerce",   
  };

  return (
    <div>


   
    
    <HeroSection myData={data} />;
    </div>
  )
};

export default About;