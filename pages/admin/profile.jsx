import { useState } from "react";
import Image from "next/image";
import Order from "../../components/admin/Order";
import Products from "../../components/admin/Products";
import Category from "../../components/admin/Category";
import Footer from "../../components/admin/Footer";

const Profile = () => {
    const [tabs, setTabs] = useState(0);

    return (
        <div className="flex min-h-[calc(100vh_-_448px)] mt-5 p-2 md:p-4 flex-col lg:flex-row gap-x-5">
            <div className="relative border-2 w-full max-w-[720px] lg:w-64 xl:w-80 mx-auto h-fit mb-5">
                <div className="my-5">
                    <Image
                        src={"/images/admin.png"}
                        alt="admin-profile"
                        width={100}
                        height={100}
                        className="rounded-full mx-auto"
                    />
                    <h3 className="text-2xl font-bold text-center mt-1">Admin</h3>
                </div>
                <ul className="flex flex-row lg:flex-col border-t lg:border-none justify-evenly font-semibold">
                    <li
                        className={`hover:bg-primary hover:text-white cursor-pointer  p-1 py-3 lg:p-3 border-r lg:border-y lg:border-r-0  w-full ${
                            tabs === 0 && "bg-primary text-white"
                        }`}
                        onClick={() => setTabs(0)}
                    >
                        <i className="fa fa-cutlery inline-block mr-2 text-xl md:text-2xl"> </i>
                        <span>Products</span>
                    </li>
                    <li
                        className={`hover:bg-primary hover:text-white cursor-pointer p-1 py-3 lg:p-3 border-r lg:border-b lg:border-r-0  w-full ${
                            tabs === 1 && "bg-primary text-white"
                        }`}
                        onClick={() => setTabs(1)}
                    >
                        <i className="fa fa-motorcycle inline-block mr-2 text-xl md:text-2xl"></i>
                        <span>Orders</span>
                    </li>
                    <li
                        className={`hover:bg-primary hover:text-white cursor-pointer  p-1 py-3 lg:p-3 border-r lg:border-b lg:border-r-0  w-full ${
                            tabs === 2 && "bg-primary text-white"
                        }`}
                        onClick={() => setTabs(2)}
                    >
                        <i className="fa fa-list inline-block mr-2 text-xl md:text-2xl"> </i>
                        <span>Categories</span>
                    </li>
                    <li
                        className={`hover:bg-primary hover:text-white cursor-pointer p-1 py-3 lg:p-3 border-r lg:border-b lg:border-r-0  w-full ${
                            tabs === 3 && "bg-primary text-white"
                        }`}
                        onClick={() => setTabs(3)}
                    >
                        <i className="fa fa-window-maximize block md:inline-block mr-2 text-xl md:text-2xl"></i>
                        <span>Footer</span>
                    </li>
                    <li
                        className="hover:bg-primary hover:text-white cursor-pointer p-1 py-3 lg:p-3 w-full"
                        onClick={() => setTabs(4)}
                    >
                        <i className="fa fa-sign-out block md:inline-block mr-2 text-xl md:text-2xl"></i>
                        <span>Exit</span>
                    </li>
                </ul>
            </div>
            <div className="flex-1 max-w-[1200px] overflow-hidden">
                {tabs === 0 && <Products />}
                {tabs === 1 && <Order />}
                {tabs === 2 && <Category />}
                {tabs === 3 && <Footer />}
            </div>
        </div>
    );
};

export default Profile;
