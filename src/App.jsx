import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadinCard from "./components/HeadinCard";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadinCard />
      <Food />
      <Category />
    </div>
  );
}

export default App;
