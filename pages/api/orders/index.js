import Order from "../../../models/Order";
import User from "../../../models/User";
import dbConnect from "../../../utils/dbConnect";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {
    await dbConnect();
    const { method } = req;
    const { userId } = req.query;

    if (method === "GET") {
        if (userId) {
            try {
                const orders = await Order.find({ customer: new ObjectId(userId) }).populate({
                    path: "customer",
                    select: "fullName  _id",
                    model: User,
                });
                res.status(200).json(orders);
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            try {
                const orders = await Order.find().populate({
                    path: "customer",
                    select: "fullName email phoneNumber _id",
                    model: User,
                });
                res.status(200).json(orders);
            } catch (error) {
                res.status(500).json(error);
            }
        }
    } else if (method === "POST") {
        try {
            const newOrder = await Order.create({
                ...req.body,
                customer: new ObjectId(req.body.customer),
            });
            res.status(201).json(newOrder);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    } else {
        res.status(500).json({ message: "Method not allowed" });
    }
};

export default handler;
