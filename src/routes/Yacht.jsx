import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import PagesInfo from "../components/PagesInfo/PagesInfo";
import YachtDetail from "../components/YachtDetail/YachtDetail";


export default function Yacht() {
    return(
        <div>
            <NavBar />
            <PagesInfo heading="Where would you go?"/>
            <YachtDetail />
            <Footer />
        </div>
    );
}