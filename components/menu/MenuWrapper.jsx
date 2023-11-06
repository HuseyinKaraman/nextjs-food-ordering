import React from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
    return (
        <div className="container py-10 mx-auto mb-16">
            <Title addClass={"text-center text-[40px]"}>Our Menu</Title>
            <div className="flex justify-center gap-x-6 my-10">
                <button className="btn-secondary">All</button>
                <button className="">Burger</button>
                <button className="">Pizza</button>
                <button className="">Pasta</button>
                <button className="">Fries</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-2 gap-y-4 md:gap-x-4">
                <MenuItem
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis itaque dicta at dolore"
                    title={"Delicious pizza"}
                    imageSrc={"f1.png"}
                    price={15}
                />
                <MenuItem
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    illum delectus dignissimos quaerat eius recusandae"
                    title={"Delicious Burger"}
                    imageSrc={"f2.png"}
                    price={25}
                />
                <MenuItem
                    description="Provident reiciendis itaque dicta at dolore
                    illum delectus dignissimos quaerat eius recusandae"
                    title={"Delicious Doner"}
                    imageSrc={"f3.png"}
                    price={18}
                />
                <MenuItem
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis itaque dicta at dolore
                    illum delectus dignissimos quaerat eius recusandae"
                    title={"Delicious Fries"}
                    imageSrc={"f4.png"}
                    price={15}
                />
                <MenuItem
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    title={"Delicious Pasta"}
                    imageSrc={"f5.png"}
                    price={15}
                />
                <MenuItem
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis itaque dicta at dolore
                    illum delectus dignissimos quaerat eius recusandae"
                    title={"Delicious pizza"}
                    imageSrc={"f6.png"}
                    price={15}
                />
                <MenuItem
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis itaque dicta at dolore
                    illum delectus dignissimos quaerat eius recusandae"
                    title={"Delicious pizza"}
                    imageSrc={"f6.png"}
                    price={15}
                />
            </div>
        </div>
    );
};

export default MenuWrapper;
