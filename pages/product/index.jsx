import Image from "next/legacy/image";
import React, { useState } from "react";
import Title from "../../components/ui/Title";
import { addProduct } from "../../redux/cart/cartSlice";
import { useDispatch,useSelector } from "react-redux";

const items = [
    {
        id:"1",
        name: "extra 1",
        price: 2,
    },
    {
        id:"2",
        name: "extra 2",
        price: 3,
    },
    {
        id:"3",
        name: "extra 3",
        price: 4,
    },
]

const Index = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const [prices, setPrices] = useState([10, 20, 30]);
    const [price, setPrice] = useState(prices[0]);
    const [size, setSize] = useState(0);
    const [extraItems, setExtraItems] = useState(items);
    const [extras, setExtras] = useState([]);
    
    const handleSize = (sizeIndex)=>{
        const difference = prices[sizeIndex] - prices[size];
        setSize(sizeIndex);
        changePrice(difference);
    }

    const changePrice = (number)=> {
        setPrice(price + number);
    }

    const handleExtraItemsCheckChange = (e,item) => {
        if (e.target.checked) {
            changePrice(item.price);
            setExtras([...extras, item]);
        } else {
            changePrice(-1 * item.price);
            setExtras(extras.filter((extra) => extra.id !== item.id));
        }
    };
    
    const handleAddToCart = ()=>{
        dispatch(addProduct({id:1,name:"Good Pizza",price,extras,size,desc:"very very good pizza",quantity:1}));
    }

    return (
        <div className="flex my-10 md:h-[calc(100vh_-_168px)] items-center gap-12 flex-col md:flex-row">
            <div className="relative md:flex-1 md:ml-5 mx-auto h-52 w-52 md:h-[70%] md:w-[70%] md:w-min-[320px]">
                <Image src="/images/f1.png" alt="image" layout="fill" objectFit="contain" />
            </div>
            <div className="md:flex-1 mx-5 md:mx-0 lg:mx-10 text-center md:text-start">
                <Title addClass={"text-[42px] mb-2 lg:text-[60px] "}>Good Pizza</Title>
                <span className="my-3 inline-block text-2xl text-primary font-bold underline">${price}</span>
                <p className="text-sm pr-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia aperiam perspiciatis corporis
                    recusandae temporibus minima dolorem, distinctio corrupti, molestiae facere ea reprehenderit totam
                    ipsam tempore earum sunt delectus animi porro.
                </p>
                <div className="flex justify-center flex-col items-center md:items-start">
                    <h4 className="font-semibold font-sans text-xl mb-2 mt-6">Choose the size</h4>
                    <div className="flex items-center gap-x-10">
                        <div className="relative w-10 h-10 cursor-pointer" onClick={() => handleSize(0)}>
                            <Image src="/images/size.png" alt="image" layout="fill" />
                            <span className="bg-primary absolute -right-4 top-0 text-xs px-[3px] rounded-r-md">
                                Small
                            </span>
                        </div>
                        <div className="relative w-12 h-12 cursor-pointer" onClick={() => handleSize(1)}>
                            <Image src="/images/size.png" alt="image" layout="fill" />
                            <span className="bg-primary absolute -right-4 top-0 text-xs px-[3px] rounded-r-md">
                                Medium
                            </span>
                        </div>
                        <div className="relative w-16 h-16 cursor-pointer" onClick={() => handleSize(2)}>
                            <Image src="/images/size.png" alt="image" layout="fill" />
                            <span className="bg-primary absolute -right-2 top-1 text-xs px-[3px] rounded-r-md">
                                Large
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center md:items-start mt-4 mb-10 md:mb-6">
                    <h4 className="font-semibold font-sans text-xl mb-4">Choose additional ingredients</h4>
                    <div className="flex items-center gap-x-10">
                        {extraItems.map((item) => (
                            <label className="flex items-center gap-x-1" key={item.id} onChange={(e) => handleExtraItemsCheckChange(e, item)}>
                                <input type="checkbox" name={item.name} className="w-5 h-5 accent-primary" />
                                <span className="text-sm font-semibold">{item.name}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <button className="btn-primary w-full md:w-fit" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Index;
