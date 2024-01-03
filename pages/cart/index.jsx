import Image from "next/image";
import Title from "../../components/ui/Title";
import { useDispatch, useSelector } from "react-redux";
import { getSession, useSession } from "next-auth/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import PopConfirm from "../../components/ui/PopConfirm";
import { clearCart } from "../../redux/cart/cartSlice";
import { useRouter } from "next/router";

const Index = ({ user }) => {
    const { data: session } = useSession();
    const dispatch = useDispatch();
    const { push } = useRouter();
    const cart = useSelector((state) => state.cart);
    const [confirm, setConfirm] = useState(false);

    const createOrder = async () => {
        if (checkUserInfo(user)) {
            try {
                const newOrder = { customer: user._id, address: user.address, total: cart.total, status: 0 };
                const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
                    ...newOrder,
                    paymentMethod: 0,
                });
                if (res.status === 201) {
                    toast.success("Order created successfully", {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    dispatch(clearCart());
                    push(`/order/${res.data._id}`);
                }
            } catch (error) {
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    };

    const checkUserInfo = (usr) => {
        if (!usr || !session) {
            toast.error("Please login first", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return false;
        } else {
            if (
                usr.phoneNumber === undefined ||
                user.phoneNumber === "" ||
                usr.address === undefined ||
                user.address === ""
            ) {
                toast.error("Please update your profile", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return false;
            }
            return true;
        }
    };

    return (
        <div className="flex w-full flex-col justify-evenly md:h-[calc(100vh_-_88px)] my-10 md:my-0 px-0 md:px-10 gap-y-10">
            <div className="table_wrapper">
                <table className="w-full text-center text-gray-500">
                    <thead className="text-xs text-gray-400 uppercase bg-secondray">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                PRODUCT
                            </th>
                            <th scope="col" className="py-3 px-6">
                                EXTRAS
                            </th>
                            <th scope="col" className="py-3 px-6">
                                PRICE
                            </th>
                            <th scope="col" className="py-3 px-6">
                                QUANTITY
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.products.map((item) => (
                            <tr className="bg-secondray border-gray-700 hover:bg-primary transition-all" key={item.id}>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-x-1">
                                    <Image
                                        src={"/images/f1.png"}
                                        alt=""
                                        width={45}
                                        height={45}
                                        className="md:block hidden"
                                    />
                                    <span>{item.name}</span>
                                </td>
                                <td className="py-4 px-6 font-medium hover:text-white">
                                    {item.extras.map((extra) => extra.text + ", ")}
                                </td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                    ${item.price}
                                </td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                    {item.quantity}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between md:justify-center items-center flex-row md:flex-col gap-0 md:gap-7 mr-10 ml-auto w-[400px] md:w-auto p-5 md:p-10 bg-secondray rounded-[50px] text-white relative">
                <Title addClass={"text-4xl md:text-5xl whitespace-nowrap"}>Cart Total</Title>
                <div className="flex flex-col gap-1  text-[14px] md:text-[16px]">
                    <span>
                        <b className="mr-2">Subtotal: </b>${cart.total}
                    </span>
                    <span>
                        <b className="mr-2">Discount: </b>$0.00
                    </span>
                    <span>
                        <b className="mr-2">Total: </b>${cart.total + cart.total * 0.1}
                    </span>
                    <button className="btn-primary mt-3" onClick={createOrder}>
                        CHECKOUT NOW!
                    </button>
                </div>
                {confirm && (
                    <PopConfirm
                        setConfirm={setConfirm}
                        sendRequest={createOrder}
                        question={"Are you sure you want to checkout?"}
                    />
                )}
            </div>
        </div>
    );
};

export default Index;

export const getServerSideProps = async (ctx) => {
    const session = await getSession({ req: ctx.req });

    let userRes = null;
    try {
        userRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${session?.user._id}`);
    } catch (error) {
        console.log(error);
    }

    return {
        props: {
            user: userRes ? userRes.data : null,
        },
    };
};
