import { useEffect, useState } from "react";
import Image from "next/image";
import Order from "../../components/admin/Order";
import Products from "../../components/admin/Products";
import Category from "../../components/admin/Category";
import Footer from "../../components/admin/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import PopConfirm from "../../components/ui/PopConfirm";
import AddProduct from "../../components/admin/AddProduct";

const Profile = ({ getCategories }) => {
    const [tabs, setTabs] = useState(0);
    const [confirm, setConfirm] = useState(false);
    const [isproductModal, setIsProductModal] = useState(false);
    const [categories, setCategories] = useState(getCategories);
    const [products, setProducts] = useState([]);

    const { push } = useRouter();

    const exitAdminAccount = async () => {
        try {
            setConfirm(false);
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
            if (res.status === 200) {
                push("/admin");
                toast.success("Admin Logout", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            }
        } catch (err) {
            const message = err.response ? err.response : "Something went wrong";
            toast.error(message, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    };

     // anlık degişiklikleri yakalamak için yapıldı
    const getProducts = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
            setProducts(res.data);
        } catch (error) {
            console.log(error);
        }
    };

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
                    <li className={`hover:bg-primary hover:text-white cursor-pointer  p-1 py-3 lg:p-3 border-r lg:border-y lg:border-r-0  w-full ${
                            tabs === 0 && "bg-primary text-white"
                        }`}
                        onClick={() => setTabs(0)}
                    >
                        <i className="fa fa-cutlery inline-block mr-2 text-xl md:text-2xl"> </i>
                        <span>Products</span>
                    </li>
                    <li className={`hover:bg-primary hover:text-white cursor-pointer p-1 py-3 lg:p-3 border-r lg:border-b lg:border-r-0  w-full ${
                            tabs === 1 && "bg-primary text-white"
                        }`}
                        onClick={() => setTabs(1)}
                    >
                        <i className="fa fa-motorcycle inline-block mr-2 text-xl md:text-2xl"></i>
                        <span>Orders</span>
                    </li>
                    <li className={`hover:bg-primary hover:text-white cursor-pointer  p-1 py-3 lg:p-3 border-r lg:border-b lg:border-r-0  w-full ${
                            tabs === 2 && "bg-primary text-white"
                        }`}
                        onClick={() => setTabs(2)}
                    >
                        <i className="fa fa-list inline-block mr-2 text-xl md:text-2xl"> </i>
                        <span>Categories</span>
                    </li>
                    <li className={`hover:bg-primary hover:text-white cursor-pointer p-1 py-3 lg:p-3 border-r lg:border-b lg:border-r-0  w-full ${
                            tabs === 3 && "bg-primary text-white"
                        }`}
                        onClick={() => setTabs(3)}
                    >
                        <i className="fa fa-window-maximize block md:inline-block mr-2 text-xl md:text-2xl"></i>
                        <span>Footer</span>
                    </li>
                    <li className="hover:bg-primary hover:text-white cursor-pointer p-1 py-3 lg:p-3 w-full"
                        onClick={() => setConfirm(true)}
                    >
                        <i className="fa fa-sign-out block md:inline-block mr-2 text-xl md:text-2xl"></i>
                        <span>Exit</span>
                    </li>
                </ul>
                {confirm && (
                    <PopConfirm
                        setConfirm={setConfirm}
                        sendRequest={exitAdminAccount}
                        question={"Are you sure you want to exit?"}
                    />
                )}
            </div>
            <div className="flex-1 max-w-[1200px] overflow-hidden relative">
                {isproductModal && <AddProduct setIsProductModal={setIsProductModal} categories={categories} getProducts={getProducts}/>}
                {tabs === 0 && (
                    <>
                        <Products getProducts={getProducts} products={products} setProducts={setProducts} />
                        <button
                            onClick={() => setIsProductModal(true)}
                            className="absolute right-5 top-5 text-2xl btn !bg-primary"
                        >
                            +
                        </button>
                    </>
                )}
                {tabs === 1 && <Order />}
                {tabs === 2 && <Category setCategories={setCategories} categories={categories} />}
                {tabs === 3 && <Footer />}
            </div>
        </div>
    );
};

//** https://nextjs.org/docs/pages/api-reference/functions/get-server-side-props */
//! todo : change this func dinamic token
export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || "";
    if (myCookie.token !== process.env.ADMIN_TOKEN) {
        return {
            redirect: {
                destination: "/admin",
                permanent: false,
            },
        };
    }

    let categoryRes;
    try {
        categoryRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    } catch (error) {
        console.log(error);
    }

    return {
        props: {
            getCategories: categoryRes ? categoryRes.data : [],
        },
    };
};

export default Profile;
