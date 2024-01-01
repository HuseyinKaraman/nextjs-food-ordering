import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import Image from "next/image";
import PopConfirm from "../ui/PopConfirm";
import { toast } from "react-toastify";
import axios from "axios";

const Products = ({getProducts,setProducts,products}) => {
    const [confirm, setConfirm] = useState(false);
    const [product, setProduct] = useState(false);

    useEffect(() => {
        getProducts();
    }, [getProducts]);


    const handleDelete = async () => {
        try {
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/products/${product._id}`);
            if (res.status === 200) {
                toast.success("Product deleted successfully", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                getProducts();
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    };

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
                        {products?.length > 0 &&
                            products?.map((product, index) => (
                                <tr
                                    className="bg-secondray border-gray-700 hover:bg-primary transition-all cursor-pointer"
                                    key={product._id}
                                >
                                    <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white items-center justify-center gap-x-1 hidden md:flex">
                                        <Image src={product?.img} alt="" width={45} height={45} />
                                    </td>
                                    <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">
                                        {product?._id}
                                    </td>
                                    <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">
                                        {product?.title}
                                    </td>
                                    <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">
                                        {product?.prices}
                                    </td>
                                    <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap">
                                        <button
                                            className="text-md px-2 py-1 md:px-3 md:py-1 rounded-full font-semibold bg-danger text-white hover:text-black"
                                            onClick={() => {
                                                setProduct(product);
                                                setConfirm(true);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            {confirm && (
                <PopConfirm
                    setConfirm={setConfirm}
                    question="Are you sure you want to delete this product?"
                    sendRequest={handleDelete}
                    addClass={"!bottom-24 !left-24 md:!bottom-[520px] md:!left-[450px]"}
                />
            )}
        </>
    );
};

export default Products;
