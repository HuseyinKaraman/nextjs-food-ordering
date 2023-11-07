import Image from "next/image";
import React from "react";
import Title from "../../components/ui/Title";

const Index = () => {
    return (
        <div className="flex h-screen justify-center items-center md:gap-12 flex-col md:flex-row">
            <div className="relative flex-1 md:ml-5 mx-auto h-[80%] w-[80%] md:h-[70%] md:w-[70%] sm:!min-w-[320px]">
                <Image src="/images/f1.png" alt="image" layout="fill" className="py-10 md:py-0" objectFit="contain"/>
            </div>
            <div className="flex-1 mx-5 md:mx-0 lg:mx-10 text-center md:text-start">
                <Title addClass={"text-[42px] mb-2 lg:text-[60px] "}>Good Pizza</Title>
                <span className="my-3 inline-block text-2xl text-primary font-bold underline">10$</span>
                <p className="text-sm pr-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia aperiam perspiciatis corporis
                    recusandae temporibus minima dolorem, distinctio corrupti, molestiae facere ea reprehenderit totam
                    ipsam tempore earum sunt delectus animi porro.
                </p>
                <div className="flex justify-center flex-col items-center md:items-start">
                    <h4 className="font-semibold font-sans text-xl mb-2 mt-6">Choose the size</h4>
                    <div className="flex items-center gap-x-10">
                        <div className="relative w-10 h-10">
                            <Image src="/images/size.png" alt="image" layout="fill" />
                            <span className="bg-primary absolute -right-4 top-0 text-xs px-[3px] rounded-r-md">
                                Small
                            </span>
                        </div>
                        <div className="relative w-12 h-12">
                            <Image src="/images/size.png" alt="image" layout="fill" />
                            <span className="bg-primary absolute -right-4 top-0 text-xs px-[3px] rounded-r-md">
                                Medium
                            </span>
                        </div>
                        <div className="relative w-16 h-16">
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
                        <label className="flex items-center gap-x-1">
                            <input type="checkbox" name="ketchup" className="w-5 h-5 accent-primary" />
                            <span className="text-sm font-semibold">ketchup</span>
                        </label>
                        <label className="flex items-center gap-x-1">
                            <input type="checkbox" name="bitter sauce" className="w-5 h-5 accent-primary" />
                            <span className="text-sm font-semibold">bitter sauce</span>
                        </label>
                        <label className="flex items-center gap-x-1">
                            <input type="checkbox" name="pepper" className="w-5 h-5 accent-primary" />
                            <span className="text-sm font-semibold">pepper</span>
                        </label>
                    </div>
                </div>
                <button className="btn-primary w-full md:w-fit">Add to Cart</button>
            </div>
        </div>
    );
};

export default Index;
