import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import { toast } from "react-toastify";
import axios from "axios";

const Order = ({id}) => {
    const [orders, setOrders] = useState([]);
    const status = ["pending", "preparing", "on the way","delivered","canceled"];

    // anlık degişiklikleri yakalamak için yapıldı
    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders?userId=${id}`);
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
    }, [id]);

    return (
        <>
            <Title addClass={"text-[40px]"}>Orders</Title>
            <div className="table_wrapper">
                <table className="w-full text-center text-gray-500">
                    <thead className="text-xs text-gray-400 uppercase bg-secondray">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                ID
                            </th>
                            <th scope="col" className="py-3 px-6">
                                ADDRESS
                            </th>
                            <th scope="col" className="py-3 px-6">
                                DATE
                            </th>
                            <th scope="col" className="py-3 px-6">
                                TOTAL
                            </th>
                            <th scope="col" className="py-3 px-6">
                                STATUS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order,index)=>(
                            <tr key={order._id} className="bg-secondray border-gray-700 hover:bg-primary transition-all cursor-pointer">
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                {order._id}
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">{order.address}</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">{order.createdAt.substring(0,10)}</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">{order.total+(order.total*0.1)}</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">{status[order.status]}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Order;
