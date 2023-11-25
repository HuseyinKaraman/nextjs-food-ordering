import Image from "next/image";
import React from "react";
import Title from "../ui/Title";

const Order = () => {
    return (
        <>
            <Title addClass={"text-[40px]"}>Orders</Title>
            <div className="table_wrapper">
                <table className="w-full text-center text-gray-500">
                    <thead className="text-xs text-gray-400 uppercase bg-secondray">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                ID
                            </th>
                            <th scope="col" className="py-3 px-6">
                                ADDRESS
                            </th>
                            <th scope="col" className="py-3 px-6">
                                DATE
                            </th>
                            <th scope="col" className="py-3 px-6">
                                TOTAL
                            </th>
                            <th scope="col" className="py-3 px-6">
                                STATUS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-secondray border-gray-700 hover:bg-primary transition-all cursor-pointer">
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">10795713855646846</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">ISTANBUL</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">01-09-2022</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">preparing</td>
                        </tr>
                        <tr className="bg-secondray border-gray-700 hover:bg-primary transition-all cursor-pointer">
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">10795713855646846</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">ISTANBUL</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">01-09-2022</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">preparing</td>
                        </tr>
                        <tr className="bg-secondray border-gray-700 hover:bg-primary transition-all cursor-pointer">
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">10795713855646846</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">ISTANBUL</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">01-09-2022</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">preparing</td>
                        </tr>
                        <tr className="bg-secondray border-gray-700 hover:bg-primary transition-all cursor-pointer">
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">10795713855646846</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">ISTANBUL</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">01-09-2022</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">preparing</td>
                        </tr>
                        <tr className="bg-secondray border-gray-700 hover:bg-primary transition-all cursor-pointer">
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">10795713855646846</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">ISTANBUL</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">01-09-2022</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">preparing</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Order;
