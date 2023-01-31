import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
    return(
        <>
            <NavBar />
            <HeroSection />
            <AboutUs />
            <Footer />
        </>
    );
}