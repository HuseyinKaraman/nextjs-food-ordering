import Product from "../../../models/Product";
import dbConnect from "../../../utils/dbConnect";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {
    await dbConnect();
    const { method } = req;

    if (method === "GET") {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(error);
        }
    } else if (method === "POST") {
        try {
            const newProduct = await Product.create({
                ...req.body,
                categoryId: new ObjectId(req.body.categoryId.trim())
            });
            res.status(201).json(newProduct);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    } else {
        res.status(500).json({ message: "Method not allowed" });
    }
};


export default handler;