import Image from "next/image";
import Title from "../../components/ui/Title";

const Index = () => {
    return (
        <div className="w-full md:max-h-[calc(100vh_-_88px)] mt-8">
            <div className="flex w-full justify-between flex-col">
                <div className="table_wrapper p-2">
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
                            <tr className="bg-secondray border-gray-700 hover:bg-primary transition-all">
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-x-1">
                                    <Image
                                        src={"/images/f1.png"}
                                        alt=""
                                        width={45}
                                        height={45}
                                        className="md:block hidden"
                                    />
                                    <span>Good Pizza</span>
                                </td>
                                <td className="py-4 px-6 font-medium hover:text-white">mayonez,acı sos,ketchap</td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">1</td>
                            </tr>
                            <tr className="bg-secondray border-gray-700 hover:bg-primary transition-all">
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-x-1">
                                    <Image
                                        src={"/images/f1.png"}
                                        alt=""
                                        width={45}
                                        height={45}
                                        className="md:block hidden"
                                    />
                                    <span>Good Pizza</span>
                                </td>
                                <td className="py-4 px-6 font-medium hover:text-white">mayonez,acı sos,ketchap</td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">1</td>
                            </tr>
                            <tr className="bg-secondray border-gray-700 hover:bg-primary transition-all">
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-x-1">
                                    <Image
                                        src={"/images/f1.png"}
                                        alt=""
                                        width={45}
                                        height={45}
                                        className="md:block hidden"
                                    />
                                    <span>Good Pizza</span>
                                </td>
                                <td className="py-4 px-6 font-medium hover:text-white">mayonez,acı sos,ketchap</td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">1</td>
                            </tr>
                            <tr className="bg-secondray border-gray-700 hover:bg-primary transition-all">
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-x-1">
                                    <Image
                                        src={"/images/f1.png"}
                                        alt=""
                                        width={45}
                                        height={45}
                                        className="md:block hidden"
                                    />
                                    <span>Good Pizza</span>
                                </td>
                                <td className="py-4 px-6 font-medium hover:text-white">mayonez,acı sos,ketchap</td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">1</td>
                            </tr>
                            <tr className="bg-secondray border-gray-700 hover:bg-primary transition-all">
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-x-1">
                                    <Image
                                        src={"/images/f1.png"}
                                        alt=""
                                        width={45}
                                        height={45}
                                        className="md:block hidden"
                                    />
                                    <span>Good Pizza</span>
                                </td>
                                <td className="py-4 px-6 font-medium hover:text-white">mayonez,acı sos,ketchap</td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">1</td>
                            </tr>
                            <tr className="bg-secondray border-gray-700 hover:bg-primary transition-all">
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-x-1">
                                    <Image
                                        src={"/images/f1.png"}
                                        alt=""
                                        width={45}
                                        height={45}
                                        className="md:block hidden"
                                    />
                                    <span>Good Pizza</span>
                                </td>
                                <td className="py-4 px-6 font-medium hover:text-white">mayonez,acı sos,ketchap</td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">1</td>
                            </tr>
                            <tr className="bg-secondray border-gray-700 hover:bg-primary transition-all">
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-x-1">
                                    <Image
                                        src={"/images/f1.png"}
                                        alt=""
                                        width={45}
                                        height={45}
                                        className="md:block hidden"
                                    />
                                    <span>Good Pizza</span>
                                </td>
                                <td className="py-4 px-6 font-medium hover:text-white">mayonez,acı sos,ketchap</td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div
                    className="flex justify-between md:justify-center items-center flex-row md:flex-col gap-0 md:gap-7 ml-auto mr-10 mb-10 mt-10 w-[400px] md:w-auto p-5 md:p-10 bg-secondray rounded-[50px] text-white"
                >
                    <Title addClass={"text-4xl md:text-5xl whitespace-nowrap"}>Cart Total</Title>
                    <div className="flex flex-col gap-1  text-[14px] md:text-[16px]">
                        <span>
                            <b className="mr-2">Subtotal: </b>$20.00
                        </span>
                        <span>
                            <b className="mr-2">Discount: </b>$0.00
                        </span>
                        <span>
                            <b className="mr-2">Total: </b>$20.00
                        </span>
                        <button className="btn-primary mt-3">CHECKOUT NOW!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
