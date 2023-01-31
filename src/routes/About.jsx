import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PagesInfo from "../components/PagesInfo/PagesInfo";

export default function About() {
    return(
        <div>
            <NavBar />
            <PagesInfo heading="About" text="Things about page"/>
            <Footer />
        </div>
    );
}