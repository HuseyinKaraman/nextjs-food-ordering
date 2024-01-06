import { useEffect, useState } from "react";
import Title from "../ui/Title";
import axios from "axios";

const Footer = () => {
    const [footer, setFooter] = useState([]);

    useEffect(() => {
        const getFooter = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/footer`);
                if (res.status === 200) {
                    setFooter(res.data[0]);
                }
            } catch (error) {}
        };
        getFooter();
    }, []);

    return (
        <div className="bg-secondray text-white">
            <div className="container mx-auto  pt-16 pb-6">
                <div className="flex flex-wrap md:justify-between justify-center text-center gap-y-7 md:gap-y-0">
                    <div className="md:flex-1">
                        <Title addClass={"text-[28px]"}>Contact Us</Title>
                        <div className="flex flex-col gap-y-2 mt-5">
                            <div>
                                <a href={footer?.location} target="_blank" rel="noreferrer">
                                    <span>
                                        <i className="fa-solid fa-location-dot"></i> location
                                    </span>
                                </a>
                            </div>
                            <div>
                                <a href={`tel:${footer?.phoneNumber}`}>
                                    <span>
                                        <i className="fa-solid fa-phone"></i> Call +90 {footer?.phoneNumber}
                                    </span>
                                </a>
                            </div>
                            <div>
                                <a href={`mailto:${footer?.email}`}>
                                    <span>
                                        <i className="fa-regular fa-envelope"></i> {footer?.email}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1">
                        <Title addClass={"text-[32px]"}>Feane</Title>
                        <p className="mt-5">{footer?.desc}</p>
                        <div className="flex justify-center gap-x-2 text-[24px] mt-2">
                            {footer.socialMedia?.map((media, index) => (
                                <a
                                    href={media?.link}
                                    className="hover:text-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                    key={index}
                                >
                                    <i className={`${media.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="md:flex-1">
                        <Title addClass={"text-[28px]"}>Opening Hours</Title>
                        <div className="flex flex-col gap-y-2 mt-5">
                            <div>
                                <span>{footer?.openingHours?.day}</span>
                            </div>
                            <div>
                                <span>{footer?.openingHours?.time}</span>
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
