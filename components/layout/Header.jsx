import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
import Logo from "../ui/Logo";
import SearchComponent from "../ui/SearchComponent";
import { useRouter } from "next/router";

const Header = () => {
    const [isSearchModal, setIsSearchModal] = useState(false);
    const [isMenuModal, setIsMenuModal] = useState(false);
    const router = useRouter()

    return (
        <div className={`h-[5.5rem] text-white  relative z-20 ${router.asPath === "/" ? "bg-transparent" : "bg-secondray"}`}>
            <div className="sm:container max-sm:mx-4 flex items-center !justify-between mx-auto h-full">
                <div>
                    <Logo />
                </div>
                {/** //! Seo için nav yapıldı  */}
                <nav
                    className={`sm:static absolute top-0 left-0 max-sm:z-20 max-sm:!h-screen max-sm:!w-screen  max-sm:bg-slate-500 text-white sm:flex hidden ${
                        isMenuModal && "max-sm:!grid place-content-center"
                    }`}
                >
                    <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
                        <li className="px-[5px] py-[14px] hover:text-primary cursor-pointer">
                            <a href="#">HOME</a>
                        </li>
                        <li className="px-[5px] py-[14px] hover:text-primary cursor-pointer">
                            <a href="#">MENU</a>
                        </li>
                        <li className="px-[5px] py-[14px] hover:text-primary cursor-pointer">
                            <a href="#">ABOUT</a>
                        </li>
                        <li className="px-[5px] py-[14px] hover:text-primary cursor-pointer">
                            <a href="#">BOOK TABLE</a>
                        </li>
                    </ul>
                </nav>
                <div className="flex gap-x-3 items-center">
                    <a href="#" className="px-[5px] py-[14px] hover:text-primary cursor-pointer transition-all">
                        <FaUserAlt />
                    </a>
                    <a href="#" className="px-[5px] py-[14px] hover:text-primary cursor-pointer transition-all">
                        <FaShoppingCart />
                    </a>
                    <button
                        className="px-[5px] py-[14px] hover:text-primary cursor-pointer transition-all"
                        onClick={() => setIsSearchModal(true)}
                    >
                        <FaSearch />
                    </button>
                    <a href="#" className="sm:inline-block hidden">
                        <button className="btn">Order Online</button>
                    </a>
                    <button className="sm:hidden text-xl inline-block" onClick={() => setIsMenuModal(!isMenuModal)}>
                        <GiHamburgerMenu />
                    </button>
                </div>
                {isMenuModal && (
                    <GiCancel
                        size={25}
                        className="sm:hidden absolute right-4 top-4  cursor-pointer hover:opacity-60 z-20"
                        onClick={() => {
                            setIsMenuModal(false);
                        }}
                    />
                )}
            </div>
            {isSearchModal && <SearchComponent setIsSearchModal={setIsSearchModal} />}
        </div>
    );
};

export default Header;