import Image from "next/image";
import Title from "./ui/Title";
import {MdShoppingCart} from "react-icons/md"

const CampaingItem = ({imageName,title,discount}) => {
    return (
        <div className="bg-secondray flex flex-1 rounded-lg py-5 px-[10px] md:px-[15px]">
            <div className="relative w-40 h-40 mr-5 border-[5px] border-primary rounded-full overflow-hidden">
                <Image layout="fill" alt="" src={`/images/${imageName}`} objectFit="cover" className="hover:scale-110 transition-all"/>
            </div>
            <div className="text-white">
                <Title addClass={"text-[32px]"}>{title}</Title>
                <p className="font-dancing my-[2px]">
                    <span className="text-[40px]">{discount}%</span>
                    <span className="inline-block ml-1">Off</span>
                </p>
                <button className="btn font-sans"> Order Now <MdShoppingCart className="inline-block ml-[2px]" /></button>
            </div>
        </div>
    );
};

const Campaings = () => {
    return (
        <div className="flex justify-between mx-2 sm:container py-8 sm:mx-auto sm:gap-x-10 gap-y-3 flex-col md:flex-row">           
         <CampaingItem imageName="o1.jpg" title={"Burger"} discount={50}/>
            <CampaingItem imageName="o2.jpg" title={"Cheese"} discount={20}/>
        </div>
    );
};

export default Campaings;
