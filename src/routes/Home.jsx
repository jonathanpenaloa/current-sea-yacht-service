import React from "react";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
    return(
        <>
            <NavBar />
            <HeroSection />
            <Footer />
        </>
    );
}