import Image from "next/legacy/image";
import React, { useState } from "react";
import Title from "../../components/ui/Title";
import { addProduct } from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const sizes = ["Small", "Medium", "Large"];

const Index = ({ product }) => {
    const dispatch = useDispatch();
    const [price, setPrice] = useState(product.prices[0]);
    const [size, setSize] = useState(0);
    const [extras, setExtras] = useState([]);

    const handleSize = (sizeIndex) => {
        const difference = product.prices[sizeIndex] - product.prices[size];
        setSize(sizeIndex);
        changePrice(difference);
    };

    const changePrice = (number) => {
        setPrice(price + number);
    };

    const handleExtraItemsCheckChange = (e, item) => {
        if (e.target.checked) {
            changePrice(item.price);
            setExtras([...extras, item]);
        } else {
            changePrice(-1 * item.price);
            setExtras(extras.filter((extra) => extra.id !== item.id));
        }
    };

    const handleAddToCart = () => {
        dispatch(
            addProduct({
                id: product._id,
                name: product.title,
                img: product.img,
                price,
                extras,
                size,
                desc: product.desc,
                quantity: 1,
            })
        );
    };

    const chooseClass =  (index) => {
        if (index === 0) return "w-8 h-8"
        if (index === 1) return "w-12 h-12"
        if (index === 2) return "w-16 h-16"
    }

    return (
        <div className="flex my-10 md:h-[calc(100vh_-_168px)] items-center gap-12 flex-col md:flex-row">
            <div className="relative md:flex-1 md:ml-5 mx-auto h-52 w-52 md:h-[30%] md:w-[30%] md:min-w-[280px]">
                <Image src={product.img} alt="image" layout="fill" objectFit="contain" />
            </div>
            <div className="md:flex-1 mx-5 md:mx-0 lg:mx-10 text-center md:text-start">
                <Title addClass={"text-[42px] mb-2 lg:text-[60px] "}>{product.title}</Title>
                <span className="my-3 inline-block text-2xl text-primary font-bold underline">${price}</span>
                <p className="text-sm pr-5">{product.desc}</p>
                <div className="flex justify-center flex-col items-center md:items-start">
                    <h4 className="font-semibold font-sans text-xl mb-2 mt-6">Choose the size</h4>
                    <div className="flex items-center gap-x-10">
                        {product?.prices?.map((_, index) => (
                            <div
                                key={index}
                                className={`relative cursor-pointer ${
                                    size === index
                                        ? "outline-[4px] outline outline-primary outline-offset-[6px] rounded-full"
                                        : ""
                                } ${chooseClass(index)}`}
                                onClick={() => handleSize(index)}
                            >
                                <Image src="/images/size.png" alt="image" layout="fill"/>
                                <span className="bg-primary absolute -right-4 -top-[5px] text-xs px-[3px] rounded-r-md">
                                    {product.prices.length > 0 ? sizes[index] : "Normal"}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center md:items-start mt-4 mb-10 md:mb-6">
                    <h4 className="font-semibold font-sans text-xl mb-4">Choose additional ingredients</h4>
                    <div className="flex items-center gap-x-10">
                        {product?.extraOptions.length>0 &&
                            product?.extraOptions.map((item) => (
                                <label
                                    className="flex items-center gap-x-1"
                                    key={item.id}
                                    onChange={(e) => handleExtraItemsCheckChange(e, item)}
                                >
                                    <input type="checkbox" name={item.text} className="w-5 h-5 accent-primary" />
                                    <span className="text-sm font-semibold">{item.text}</span>
                                </label>
                            ))}
                    </div>
                </div>
                <button className="btn-primary w-full md:w-fit" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({ params }) => {
    const productRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`);

    return {
        props: {
            product: productRes ? productRes.data : null,
        },
    };
};

export default Index;