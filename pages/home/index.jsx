import React from "react";
import Carousel from "../../components/Carousel";
import Campaings from "../../components/Campaings";
import MenuWrapper from "../../components/menu/MenuWrapper";
import About from "../../components/About";
import Reservation from "../../components/Reservation";
import Customers from "../../components/customer/Customers";

const Index = () => {
    return (
        <>
            <Carousel />
            <Campaings/>
            <MenuWrapper/>
            <About />
            <Reservation/>
            <Customers/>
        </>
    );
};

export default Index;
