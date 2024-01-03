import dbConnect from "../../../utils/dbConnect";
import Order from "../../../models/Order";
import User from "../../../models/User";

const handler = async (req, res) => {
    await dbConnect();

    const {
        method,
        query: { id },
    } = req;

    if (method === "GET") {
        try {
            const order = await Order.findById(id).populate({
                path: "customer",
                select: "fullName email phoneNumber _id",
                model: User,
            });
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json(error);
        }
    } else if (method === "DELETE") {
        const orderRes = await Order.findByIdAndDelete(id);
        res.status(200).json(orderRes);
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
};

export default handler;
