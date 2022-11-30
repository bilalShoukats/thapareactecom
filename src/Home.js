import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProducts from "./components/FeatureProducts"

const Home = () => {
  const data = {
    name: "Bilal store",
    paragraps:' Lorem ipsum dolor sit amet consectetur adipisicing atque temporibus veniam doloribus libero ad error omnis voluptatesanimi! Suscipit sapiente.'
  };

  return (
    <div>
      <HeroSection myData={data} />
      <FeatureProducts/>
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;