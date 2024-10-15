import Hero from "@/app/alfunnels-components/Hero";
import React from "react";
import HeroBg from "@/components/site/hero-bg";

const Home = () => {
  return (
    <main className="min-h-screen relative h-full w-full ">
      <HeroBg />
      <Hero />
    </main>
  );
};

export default Home;
