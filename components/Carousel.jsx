import Image from "next/legacy/image";
import Slider from "react-slick";
import Title from "./ui/Title";
import { useRouter } from "next/router";

const Carousel = () => {
    const { push } = useRouter();

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="h-[100vh] min-h-[35rem] -mt-[176px]">
            <div className="w-full h-full absolute">
                <Image src="/images/hero-bg.jpg" alt="bg" layout="fill" objectFit="cover" />
            </div>
            <Slider {...settings} className="mx-auto w-10/12">
                <div>
                    <div className="ml-8 text-white flex flex-col items-start gap-y-10 mt-72 short:mt-[140px]">
                        <Title addClass={"text-6xl"}>Fast Food Restaurant</Title>
                        <p className="my-1 text-sm font-sans">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, a non eaque eum accusantium
                            dignissimos quae debitis incidunt odit, consequuntur aliquid perferendis. Perspiciatis
                            dolorum repellendus ducimus, commodi enim consequatur minima!
                        </p>
                        <button className="btn-primary" onClick={() => push("/menu")}>
                            Order Now
                        </button>
                    </div>
                </div>
                <div>
                    <div className="ml-8 text-white flex flex-col items-start gap-y-10  mt-72 short:mt-[140px]">
                        <Title addClass={"text-6xl"}>Fast Food Restaurant2 </Title>
                        <p className="my-1 text-sm font-sans">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, a non eaque eum accusantium
                            dignissimos quae debitis incidunt odit, consequuntur aliquid perferendis. Perspiciatis
                            dolorum repellendus ducimus, commodi enim consequatur minima!
                        </p>
                        <button className="btn-primary" onClick={() => push("/menu")}>
                            Order Now
                        </button>
                    </div>
                </div>
                <div>
                    <div className="ml-8 text-white flex flex-col items-start gap-y-10  mt-72 short:mt-[140px]">
                        <Title addClass={"text-6xl"}>Fast Food Restaurant2 </Title>
                        <p className="my-1 text-sm font-sans">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, a non eaque eum accusantium
                            dignissimos quae debitis incidunt odit, consequuntur aliquid perferendis. Perspiciatis
                            dolorum repellendus ducimus, commodi enim consequatur minima!
                        </p>
                        <button className="btn-primary" onClick={() => push("/menu")}>
                            Order Now
                        </button>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
