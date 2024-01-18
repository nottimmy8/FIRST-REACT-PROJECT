import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadinCard from "./components/HeadinCard";
import food from "./components/food";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadinCard />
      <food />
    </div>
  );
}

export default App;
