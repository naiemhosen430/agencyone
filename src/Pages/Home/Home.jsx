import React from "react";
import Hero from "./Components/Hero";
import Service from "./Components/Service";
import ClientReview from "./Components/ClientReview";
import AboutUs from "./Components/AboutUs";
import Contract from "./Components/Contract";

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <ClientReview />
      <AboutUs />
      <Contract />
    </>
  );
}
