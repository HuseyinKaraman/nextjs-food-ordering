import React from "react";
import CustomerItem from "./CustomerItem";
import Title from "../ui/Title";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Customers = () => {
    function NextBtn({ onClick }) {
        return (
            <button
                className="absolute -bottom-16 left-1/2 flex justify-center items-center text-2xl ml-2 bg-primary w-10 h-10 text-white p-2 rounded-full"
                onClick={onClick}
            >
                <IoIosArrowForward />
            </button>
        );
    }
    function PrevtBtn({ onClick }) {
        return (
            <button
                className="absolute -bottom-16 right-1/2 flex justify-center items-center text-2xl bg-primary w-10 h-10 text-white p-2 rounded-full"
                onClick={onClick}
            >
                <IoIosArrowBack />
            </button>
        );
    }

    const settings = {
        dots: false,
        arrows: true,
        speed: 200,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow: <NextBtn />,
        prevArrow: <PrevtBtn />,
        responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 1,
                arrows: false
              }
            }
        ]
    };

    return (
        <div className="container mx-auto mt-10 mb-32">
            <Title addClass={"text-[40px] text-center"}>What Say Our Customers</Title>
            <Slider {...settings}>
                <CustomerItem imgSrc="client1.jpg" />
                <CustomerItem imgSrc="client1.jpg" />
                <CustomerItem imgSrc="client2.jpg" />
                <CustomerItem imgSrc="client2.jpg" />
            </Slider>
        </div>
    );
};

export default Customers;
