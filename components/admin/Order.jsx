import Title from '../ui/Title'

const Order = () => {
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
                                STATUS
                            </th>
                            <th scope="col" className="py-4 px-6">
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-secondray border-gray-700 hover:bg-primary transition-all cursor-pointer">
                            <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">10795713855646846</td>
                            <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">John Doe</td>
                            <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">$20</td>
                            <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">Cash</td>
                            <td className="py-3 md:py-4 px-1 md:px-6 font-medium whitespace-nowrap hover:text-white">Preparing</td>
                            <td className="py-3 md:py-4 px-2 md:px-6 font-medium whitespace-nowrap">
                            <button className="text-md md:text-md px-3 py-1 md:px-4 md:py-2 rounded-full font-semibold bg-success text-white hover:text-black">Next Stage</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
  )
}

export default Order