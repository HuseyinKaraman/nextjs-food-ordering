import { useEffect, useState } from "react";
import Title from "../ui/Title";
import axios from "axios";

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState(["pending", "preparing", "on the way", "delivered", "canceled"]);
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
                        {orders.map((order, index) => (
                            <tr
                                key={order._id}
                                className="bg-secondray border-gray-700 hover:bg-primary transition-all cursor-pointer"
                            >
                                <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">
                                    {order._id.substring(0,6)}...
                                </td>
                                <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">
                                    {order.customer.fullName}
                                </td>
                                <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">
                                    {order.total + order.total * 0.1}
                                </td>
                                <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">
                                    {paymentMethod[order.paymentMethod]}
                                </td>
                                <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">
                                    {order.createdAt.substring(0, 10)}
                                </td>
                                <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">
                                    {status[order.status]}
                                </td>
                                <td className="py-3 md:py-4 px-2 md:px-6 font-medium whitespace-nowrap">
                                    <button className="text-md md:text-md px-3 py-1 md:px-4 md:py-2 rounded-full font-semibold bg-success text-white hover:text-black">
                                        Next Stage
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
