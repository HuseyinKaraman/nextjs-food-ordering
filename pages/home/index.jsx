import React from "react";
import Carousel from "../../components/Carousel";
import Campaings from "../../components/Campaings";
import MenuWrapper from "../../components/menu/MenuWrapper";
import About from "../../components/About";
import Reservation from "../../components/Reservation";
import Customers from "../../components/customer/Customers";
import Footer from "../../components/layout/Footer";

const Index = () => {
    return (
        <>
            <Carousel />
            <Campaings/>
            <MenuWrapper/>
            <About />
            <Reservation/>
            <Customers/>
            <Footer />
        </>
    );
};

export default Index;
