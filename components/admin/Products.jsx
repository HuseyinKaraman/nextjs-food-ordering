import React from "react";
import Title from "../ui/Title";
import Image from "next/image";

const Products = () => {
    return (
        <>
            <Title addClass={"text-[40px] mb-4"}>Products</Title>
            <div className="table_wrapper">
                <table className="w-full text-center text-gray-500">
                    <thead className="text-xs text-gray-400 uppercase bg-secondray">
                        <tr>
                            <th scope="col" className="py-4 px-6 hidden md:block">
                                IMAGE
                            </th>
                            <th scope="col" className="py-4 px-6">
                                ID
                            </th>
                            <th scope="col" className="py-4 px-6">
                                TITLE
                            </th>
                            <th scope="col" className="py-4 px-6">
                                PRICE
                            </th>
                            <th scope="col" className="py-4 px-6">
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-secondray border-gray-700 hover:bg-primary transition-all cursor-pointer">
                            <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white items-center justify-center gap-x-1 hidden md:flex">
                                <Image
                                    src={"/images/f1.png"}
                                    alt=""
                                    width={45}
                                    height={45}
                                />
                            </td>
                            <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">
                                10795713855646846
                            </td>
                            <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">Good Pizza</td>
                            <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
                            <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap">
                                <button className="text-md md:text-lg px-2 py-1 md:px-4 md:py-2 rounded-full font-semibold bg-danger text-white hover:text-black">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Products;
