"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import Abouts from "../components/about/About";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Abouts />
    
    </>
  );
};

export default Home;
