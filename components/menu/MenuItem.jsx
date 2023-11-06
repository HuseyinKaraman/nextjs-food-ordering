import Image from "next/image";
import React from "react";
import { MdShoppingCart } from "react-icons/md";

const MenuItem = ({ imageSrc, title, price, description }) => {
    return (
        <div className="h-[420px] w-[320px] bg-secondray rounded-[30px]">
            <div className="h-[190px] w-full rounded-bl-[44px] bg-[#f1f2f3] rounded-t-[25px] grid place-content-center">
            <div className="relative h-36 w-36 hover:scale-110 hover:cursor-pointer transition-all"> 
                <Image layout="fill" src={`/images/${imageSrc}`} alt="" objectFit="contain" />
            </div>
            </div>
            <div className="px-3 pt-3 text-white h-[200px] relative">
                <h4 className="text-lg font-sans font-semibold">{title}</h4>
                <p className="block my-2">{description}</p>
                <div className="flex justify-between absolute -bottom-5 w-11/12 ">
                    <div>${price}</div>
                    <button className="btn-primary w-10 h-10 !p-0 !rounded-full flex items-center justify-center ">
                        <MdShoppingCart className="text-2xl"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
