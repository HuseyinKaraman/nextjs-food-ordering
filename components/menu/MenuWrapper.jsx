import React, { useState } from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = ({ categoryList, productList }) => {
    const [active, setActive] = useState(0);
    const [filter, setFilter] = useState(productList.filter((product) => product.categoryId === categoryList[0]._id));

    const handleFilter = (category, index) => {
        setFilter(productList.filter((product) => product.categoryId === category._id));
        setActive(index);
    };

    return (
        <div className="container py-10 mx-auto mb-16">
            <Title addClass={"text-center text-[40px]"}>Our Menu</Title>
            <div className="flex justify-center gap-x-6 my-10">
                {categoryList &&
                    categoryList.map((category, index) => (
                        <button
                            className={`${active === index ? "btn-secondary" : "px-[25px] py-[8px]"}`}
                            key={category._id}
                            onClick={() => handleFilter(category, index)}
                        >
                            {category.name}
                        </button>
                    ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-2 gap-y-4 md:gap-x-4 min-h-[420px]">
                {filter && filter.map((product) => <MenuItem key={product._id} product={product} />)}
            </div>
        </div>
    );
};

export default MenuWrapper;
