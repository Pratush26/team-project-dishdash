import React from "react";
import Hero from "../Components/Home/Hero";
import HowItWorks from "../Components/Home/HowItWorks";
import PopularDishes from "../Components/Home/PopularDishes";
import Benefits from "../Components/Home/Benefits";
import OwnerCTA from "../Components/Home/OwnerCTA";
import Reviews from "../Components/Home/Reviews";
import Stats from "../Components/Home/Stats";

const Home = () => {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <PopularDishes />
      <Benefits />
      <OwnerCTA />
      <Reviews/>
      <Stats/>
    </main>
  );
};

export default Home;
