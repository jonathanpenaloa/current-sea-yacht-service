import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PagesInfo from "../components/PagesInfo/PagesInfo";

export default function About() {
    return(
        <div>
            <NavBar />
            <PagesInfo heading="CSYS" text=""/>
            <AboutUs />
            <Footer />
        </div>
    );
}