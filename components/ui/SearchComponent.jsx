import Title from "./Title";
import OutsideClickHandler from "react-outside-click-handler";
import Image from "next/legacy/image";
import { GiCancel } from "react-icons/gi";
import Input from "../form/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import ScaleLoader from "react-spinners/ScaleLoader";

const SearchComponent = ({ setIsSearchModal }) => {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const { push } = useRouter();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
                if (res.status === 200) {
                    setProducts(res.data);
                    setFiltered(res.data);
                }
            } catch (error) {
                toast.error("Something went wrong", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            }
        };
        setTimeout(() => {
            getProducts();
        }, 500);
    }, []);

    const handleSearch = (e) => {
        if (e.target.value === "") {
            setFiltered(products);
        } else {
            setFiltered(
                products.filter((product) => product.title.toLowerCase().includes(e.target.value.toLowerCase()))
            );
        }
    };

    return (
        <div
            className="fixed w-screen h-[calc(100vh_-_88px)] z-30 top-0 left-0 
                    after:content-[''] after:w-screen after:h-screen after:bg-white 
                    after:absolute after:opacity-10 grid place-content-center"
        >
            <OutsideClickHandler
                onOutsideClick={() => {
                    setIsSearchModal(false);
                }}
            >
                <div className="relative z-40 w-full h-full text-black">
                    <div className="w-[375px] p-5 md:w-[500px] md:p-10  border-2 rounded-3xl bg-white opacity-90">
                        <GiCancel
                            size={25}
                            className="absolute right-4 top-4  cursor-pointer hover:opacity-70"
                            onClick={() => {
                                setIsSearchModal(false);
                            }}
                        />
                        <Title addClass={"text-[40px] text-center mb-2"}>Search</Title>
                        {/* <input type="text"  className="w-full p-2 m-2 border-2 my-5" /> */}
                        <Input placeholder="Search..." type="text" onChange={handleSearch} />

                        {/* // TODO: items: */}
                        <div className="mt-5">
                            {products.length > 0 ? (
                                <ul className="max-h-52 overflow-y-auto scroll-bar">
                                    {filtered.length > 0 ? (
                                        filtered.map((product) => (
                                            <li
                                                className="m-2 flex justify-between items-center hover:bg-primary transition-all cursor-pointer"
                                                key={product?._id}
                                                onClick={() => {
                                                    push(`/product/${product?._id}`);
                                                    setIsSearchModal(false);
                                                }}
                                            >
                                                <div className="w-12 h-12 relative">
                                                    <Image src={product?.img} alt={`${product?.title}`} layout="fill" />
                                                </div>
                                                <span className="font-bold">{product?.title}</span>
                                                <span className="font-bold">{product?.prices[0]}$</span>
                                            </li>
                                        ))
                                    ) : (
                                        <p className="text-center font-semibold">No products found!</p>
                                    )}
                                </ul>
                            ) : (
                                <div className="flex justify-center items-center mt-3 w-full">
                                    <ScaleLoader color="#fca311" size={18}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    );
};

export default SearchComponent;
