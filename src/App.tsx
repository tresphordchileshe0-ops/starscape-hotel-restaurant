import React from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Rooms } from "./components/Rooms";
import { Restaurant } from "./components/Restaurant";
import { Amenities } from "./components/Amenities";
import { Gallery } from "./components/Gallery";
import { VisitorInfo } from "./components/VisitorInfo";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen w-full bg-cream font-sans text-ink">
      <Nav />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Restaurant />
        <Amenities />
        <Gallery />
        <VisitorInfo />
      </main>
      <Footer />
    </div>);

}