import React from "react";
import Title from "../ui/Title";

const Footer = () => {
    return (
        <div className="bg-secondray text-white">
            <div className="container mx-auto  pt-16 pb-6">
                <div className="flex flex-wrap md:justify-between justify-center text-center gap-y-7 md:gap-y-0">
                    <div className="md:flex-1">
                        <Title addClass={"text-[28px]"}>Contact Us</Title>
                        <div className="flex flex-col gap-y-2 mt-5">
                            <div>
                                <span>
                                    <i className="fa-solid fa-location-dot"></i> location
                                </span>
                            </div>
                            <div>
                                <span>
                                    <i className="fa-solid fa-phone"></i> Call +01 23456789
                                </span>
                            </div>
                            <div>
                                <span>
                                    <i className="fa-regular fa-envelope"></i> demo@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1">
                        <Title addClass={"text-[32px]"}>Feane</Title>
                        <p className="mt-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos totam ducimus? Illo
                            quisquam, expedita quos amet necessitatibus aliquam tempora.
                        </p>
                        <div className="flex justify-center gap-x-2 text-[24px] mt-2">
                            <a href="" className="hover:text-primary">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="" className="hover:text-primary">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="" className="hover:text-primary">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="" className="hover:text-primary">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="" className="hover:text-primary">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div className="md:flex-1">
                        <Title addClass={"text-[28px]"}>Opening Hours</Title>
                        <div className="flex flex-col gap-y-2 mt-5">
                            <div>
                                <span>Everyday</span>
                            </div>
                            <div>
                                <span>10.00 Am- 10.00 Pm</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-10">&copy; 2023 All Right Reserved By hsynKrmn</div>
            </div>
        </div>
    );
};

export default Footer;
