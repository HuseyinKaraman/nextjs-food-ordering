import axios from "axios";
import Image from "next/legacy/image";

const Index = ({ order }) => {
    const status = order?.status;

    const statusClass = (index) => {
        if (index - status < 1) return "";
        if (index - status === 1) return "animate-bounce";
        if (index - status > 1) return "";
    };

    return (
        <div className="flex w-full justify-between flex-col md:min-h-[calc(100vh_-_488px)] mt-8">
            <div className="table_wrapper md:p-2">
                <table className="w-full text-center text-gray-500 text-xs md:text-base">
                    <thead className="text-xs text-gray-400 uppercase bg-secondray">
                        <tr>
                            <th scope="col" className="py-3 px-4">
                                ORDER ID
                            </th>
                            <th scope="col" className="py-3 px-4">
                                CUSTOMER
                            </th>
                            <th scope="col" className="py-3 px-4">
                                ADDRESS
                            </th>
                            <th scope="col" className="py-3 px-4">
                                TOTAL
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-secondray border-gray-700 hover:bg-primary transition-all">
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-x-1">
                                {order._id}
                            </td>
                            <td className="py-4 px-6 font-medium hover:text-white">{order?.customer?.fullName}</td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                {order?.address}
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                ${order?.total + order?.total * 0.1}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center gap-4 mx-5 md:mx-10 mb-10 mt-10 p-5 bg-primary text-xs md:text-base">
                <div className={`relative ${statusClass(1)}`}>
                    <Image
                        alt=""
                        src={"/images/paid.png"}
                        width={80}
                        height={80}
                        className="w-10 h-10 md:!w-20 md:!h-20"
                        objectFit="contain"
                    />
                    <span>Payment</span>
                </div>
                <div className={`relative ${statusClass(2)}`}>
                    <Image
                        alt=""
                        src={"/images/bake.png"}
                        width={80}
                        height={80}
                        className="w-10 h-10 md:!w-20 md:!h-20"
                        objectFit="contain"
                    />
                    <span>Preparing</span>
                </div>
                <div className={`relative ${statusClass(3)}`}>
                    <Image
                        alt=""
                        src={"/images/bike.png"}
                        width={80}
                        height={80}
                        className="w-10 h-10 md:!w-20 md:!h-20"
                        objectFit="contain"
                    />
                    <span>On The Way</span>
                </div>
                <div className={`relative ${statusClass(4)}`}>
                    <Image
                        alt=""
                        src={"/images/delivered.png"}
                        width={80}
                        height={80}
                        className="w-10 h-10 md:!w-20 md:!h-20"
                        objectFit="contain"
                    />
                    <span>Delivered</span>
                </div>
            </div>
        </div>
    );
};

export default Index;

export const getServerSideProps = async ({ params }) => {
    const orderRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders/${params.id}`);

    return {
        props: {
            order: orderRes ? orderRes.data : null,
        },
    };
};
