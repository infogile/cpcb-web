import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainArea from "./MainArea";

const SpcbHome = () => {
    const [showNav, setShowNav] = useState(true);
    const toggleNav = () => {
      setShowNav(!showNav);
    };
    return(
        <>
        <Header toggleNav={toggleNav}/>
        <Sidebar show={showNav}/>
        <MainArea expand={!showNav} />
        </>
    );
};

export default SpcbHome;