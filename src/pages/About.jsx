import React from "react";
import Navbar from "../components/Navbar";
import Abouts from "../components/about/About";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />
      <Abouts />
    </>
  );
};

export default About;
