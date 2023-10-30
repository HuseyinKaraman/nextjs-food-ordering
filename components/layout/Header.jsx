import React from "react";
import Logo from "../ui/Logo";
import { FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";

const Header = () => {
    return (
        <div className="h-[5.5rem] bg-secondray text-white">
            <div className="container  flex items-center justify-between mx-auto h-full ">
                <div>
                    <Logo />
                </div>
                {/** //! Seo için nav yapıldı  */}
                <nav className="flex list-none gap-x-2">
                    <li className="px-[5px] py-[14px] hover:text-primary cursor-pointer">
                        <a href="">HOME</a>
                    </li>
                    <li className="px-[5px] py-[14px] hover:text-primary cursor-pointer">
                        <a href="">MENU</a>
                    </li>
                    <li className="px-[5px] py-[14px] hover:text-primary cursor-pointer">
                        <a href="">ABOUT</a>
                    </li>
                    <li className="px-[5px] py-[14px] hover:text-primary cursor-pointer">
                        <a href="">BOOK TABLE</a>
                    </li>
                </nav>
                <div className="flex gap-x-3 items-center">
                    <a href="" className="px-[5px] py-[14px]">
                        <FaUserAlt />
                    </a>
                    <a href="" className="px-[5px] py-[14px]">
                        <FaShoppingCart />
                    </a>
                    <a href="" className="px-[5px] py-[14px]">
                        <FaSearch />
                    </a>
                    <a href="">
                        <button className="btn">Order Online</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
