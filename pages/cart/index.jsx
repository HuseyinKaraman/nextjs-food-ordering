import Image from "next/image";
import Title from "../../components/ui/Title";
import { useSelector } from "react-redux";

const Index = () => {
    const cart = useSelector((state) => state.cart);

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
                                    <td className="py-4 px-6 font-medium hover:text-white">{item.extras.map((extra) => extra.text + ", ")}</td>
                                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">${item.price}</td>
                                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between md:justify-center items-center flex-row md:flex-col gap-0 md:gap-7 mr-10 ml-auto w-[400px] md:w-auto p-5 md:p-10 bg-secondray rounded-[50px] text-white">
                    <Title addClass={"text-4xl md:text-5xl whitespace-nowrap"}>Cart Total</Title>
                    <div className="flex flex-col gap-1  text-[14px] md:text-[16px]">
                        <span>
                            <b className="mr-2">Subtotal: </b>${cart.total}
                        </span>
                        <span>
                            <b className="mr-2">Discount: </b>$0.00
                        </span>
                        <span>
                            <b className="mr-2">Total: </b>${cart.total+cart.total*0.1}
                        </span>
                        <button className="btn-primary mt-3">CHECKOUT NOW!</button>
                    </div>
                </div>
            </div>
    );
};

export default Index;
