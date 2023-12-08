import Image from "next/legacy/image";
import React from "react";
import Title from "./ui/Title";

const About = () => {
    return (
        <div className="bg-secondray py-10 md:p-14">
            <div className="container mx-auto flex gap-8 md:gap-20 items-center justify-center flex-wrap-reverse lg:flex-nowrap">
                <div>
                    <div className="relative w-[300px] h-[450px] md:w-[445px] md:h-[600px]">
                        <Image src={"/images/about-img.png"} alt="about" layout="fill" />
                    </div>
                </div>
                <div className="text-white">
                    <Title addClass={"text-[40px]"}>We Are Feane</Title>
                    <p className="my-5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sint assumenda asperiores
                        perspiciatis sapiente praesentium minima cupiditate veritatis, placeat doloribus a
                        necessitatibus molestias iure provident maxime exercitationem fugit reiciendis accusantium!
                    </p>
                    <button className="btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default About;
