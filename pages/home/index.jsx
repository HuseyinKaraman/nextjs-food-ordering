import React from "react";
import Carousel from "../../components/Carousel";
import Campaings from "../../components/Campaings";
import MenuWrapper from "../../components/menu/MenuWrapper";
import About from "../../components/About";
import Reservation from "../../components/Reservation";

const Index = () => {
    return (
        <div>
            <Carousel />
            <Campaings/>
            <MenuWrapper/>
            <About />
            <Reservation/>
        </div>
    );
};

export default Index;
