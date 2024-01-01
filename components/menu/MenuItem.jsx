import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { MdShoppingCart } from "react-icons/md";

const MenuItem = ({ product }) => {
    return (
        <div className="h-[420px] w-[320px] bg-secondray rounded-[30px]">
            <div className="h-[190px] w-full rounded-bl-[44px] bg-[#f1f2f3] rounded-t-[25px] grid place-content-center">
                <Link href={`/product/${product?._id}`}>
                    <div className="relative h-36 w-36 hover:scale-110 hover:cursor-pointer transition-all"> 
                        <Image layout="fill" src={`${product?.img}`} alt="" objectFit="contain" priority="true" />
                    </div>
                </Link>
            </div>
            <div className="px-3 pt-3 text-white h-[200px] relative">
                <h4 className="text-lg font-sans font-semibold">{product?.title}</h4>
                <p className="block my-2">{product?.desc}</p>
                <div className="flex justify-between absolute -bottom-5 w-11/12 ">
                    <div>${product?.prices[0]}</div>
                    <button className="btn-primary w-10 h-10 !p-0 !rounded-full flex items-center justify-center ">
                        <MdShoppingCart className="text-2xl"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
