import React, { useState } from "react";
import Header from "../Home/Header";
import Sidebar from "./Sidebar";
import MainArea from "./MainArea";

const HeadofficeHome = () => {
    const [showNav, setShowNav] = useState(true);
    const toggleNav = () => {
      setShowNav(!showNav);
    };
    return(
        <>
        <Header toggleNav={toggleNav}/>
        <Sidebar show={showNav}/>
        </>
    );
};

export default HeadofficeHome;