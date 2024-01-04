import { useEffect, useState } from "react";
import Title from "../ui/Title";
import axios from "axios";
import { toast } from "react-toastify";

const Order = () => {
    const [orders, setOrders] = useState([]);
    const status = ["pending", "preparing", "on the way", "delivered"];
    const paymentMethod = ["Cash", "CC"];

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders`);
                if (res.status === 200) {
                    setOrders(res.data);
                }
            } catch (error) {
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            }
        };
        getOrders();
    }, []);

    const handleStatus = async (id, status) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`, {
                status: status + 1,
            });
            if (res.status === 200) {
                toast.success("Status updated successfully", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                setOrders([res.data,...orders.filter((item) => item._id !== id)]);
            }
        } catch (error) {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    };

    return (
        <>
            <Title addClass={"text-[40px] mb-4"}>Orders</Title>
            <div className="table_wrapper">
                <table className="w-full text-center text-gray-500">
                    <thead className="text-xs text-gray-400 uppercase bg-secondray">
                        <tr>
                            <th scope="col" className="py-4 px-6">
                                PRODUCT ID
                            </th>
                            <th scope="col" className="py-4 px-6">
                                CUSTOMER
                            </th>
                            <th scope="col" className="py-4 px-6">
                                TOTAL
                            </th>
                            <th scope="col" className="py-4 px-6">
                                PAYMENT
                            </th>
                            <th scope="col" className="py-4 px-6">
                                DATE
                            </th>
                            <th scope="col" className="py-4 px-6">
                                STATUS
                            </th>
                            <th scope="col" className="py-4 px-6">
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 &&
                            orders
                                ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                .map((order) => (
                                    <tr
                                        key={order._id}
                                        className="bg-secondray border-gray-700 hover:bg-primary transition-all cursor-pointer"
                                    >
                                        <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">
                                            {order._id.substring(0, 6)}...
                                        </td>
                                        <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">
                                            {order.customer.fullName}
                                        </td>
                                        <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">
                                            {order.total + order.total * 0.1}
                                        </td>
                                        <td
                                            class
                                            Name="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white"
                                        >
                                            {paymentMethod[order.paymentMethod]}
                                        </td>
                                        <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">
                                            {order.createdAt.substring(0, 10)}
                                        </td>
                                        <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">
                                            {status[order.status]}
                                        </td>
                                        <td className="py-3 md:py-4 px-2 md:px-6 font-medium whitespace-nowrap">
                                            <button
                                                className={`text-md md:text-md btn-success rounded-full font-semibold  text-white hover:text-black`}
                                                onClick={() => handleStatus(order._id, order.status)}
                                                disabled={order.status === 3}
                                            >
                                                {order.status === 3 ? "Completed" : "Next Stage"}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Order;
