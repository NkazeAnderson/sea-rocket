"use client";
import HomeHeroSection from "./components/navbar/homeHeroSection";
import HomeStats from "./components/navbar/homeStats";
import HomeOfferSection from "./components/navbar/homeOfferSection";
import HomeWhyUs from "./components/navbar/homeWhyUs";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeStats />
      <HomeOfferSection />
      <HomeWhyUs />
    </>
  );
}
