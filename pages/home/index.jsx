import React from "react";
import Carousel from "../../components/Carousel";
import Campaings from "../../components/Campaings";
import MenuWrapper from "../../components/menu/MenuWrapper";
import About from "../../components/About";

const Index = () => {
    return (
        <div>
            <Carousel />
            <Campaings/>
            <MenuWrapper/>
            <About />
        </div>
    );
};

export default Index;
