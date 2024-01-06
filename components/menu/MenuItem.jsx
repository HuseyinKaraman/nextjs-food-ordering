import Image from "next/legacy/image";
import Link from "next/link";
import { MdShoppingCart } from "react-icons/md";
import { addProduct } from "../../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const MenuItem = ({ product }) => {
    const dispatch = useDispatch();
    const sizes = ["Small", "Medium", "Large"];
    const [isClickedAddToCart, setIsClickedAddToCart] = useState(false);
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
                price: price,
                extras: extras,
                size: size,
                desc: product.desc,
                quantity: 1,
            })
        );
        setIsClickedAddToCart(false);
    };

    return (
        <div className="h-[420px] w-[320px] bg-secondray rounded-[30px]">
            <div className="h-[190px] w-full rounded-bl-[44px] bg-[#f1f2f3] rounded-t-[25px] grid place-content-center">
                <Link href={`/product/${product?._id}`}>
                    <div className="relative h-36 w-36 hover:scale-110 hover:cursor-pointer transition-all">
                        <Image layout="fill" src={`${product?.img}`} alt="" objectFit="contain" priority="true" />
                    </div>
                </Link>
            </div>
            {!isClickedAddToCart ? (
                <div className="px-3 pt-3 text-white h-[200px] relative">
                    <h4 className="text-lg font-sans font-semibold">{product?.title}</h4>
                    <p className="block my-2 max-h-28 scroll-bar overflow-auto">{product?.desc}</p>
                    <div className="flex justify-between absolute -bottom-5 w-11/12 ">
                        <div>${product?.prices[0]}</div>
                        <button
                            className="btn-primary w-10 h-10 !p-0 !rounded-full flex items-center justify-center"
                            onClick={() => setIsClickedAddToCart(true)}
                        >
                            <MdShoppingCart className="text-2xl" />
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex justify-center flex-col items-center md:items-start px-4">
                        <h4 className="font-semibold font-sans text-md mb-3 mt-2 text-white">Choose the size</h4>
                        <div className="flex items-center justify-between w-full">
                            {product?.prices?.map((_, index) => (
                                <div
                                    key={index}
                                    className={`relative cursor-pointer ${
                                        size === index
                                            ? "outline-[3px] outline outline-white outline-offset-[6px] rounded-full"
                                            : ""
                                    }`}
                                    onClick={() => handleSize(index)}
                                >
                                    <span className="bg-primary text-xs px-[3px] rounded-r-md">
                                        {product.prices.length > 0 ? sizes[index] : "Normal"}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center flex-col items-center md:items-start my-5 md:mb-6 text-white px-4">
                        <h4 className="font-semibold font-sans text-md mb-4">Choose additional ingredients</h4>
                        <div className="flex items-center gap-x-10">
                            {product?.extraOptions.length > 0 &&
                                product?.extraOptions?.map((item) => (
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
                    <div className="flex justify-between px-4">
                        <div className="text-white">${price}</div>
                        <button className="btn-primary !text-md !px-2 !py-1" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default MenuItem;
