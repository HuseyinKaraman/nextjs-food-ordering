import Category from "../../../models/Category";
import dbConnect from "../../../utils/dbConnect";

const handler = async (req, res) => {
    await dbConnect();
    const { method } = req;

    if (method === "GET") {
        try {
            const categories = await Category.find();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json(error);
        }
    } else if (method === "POST") {
        try {
            const newCategory = await Category.create(req.body);
            res.status(201).json(newCategory);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(500).json({ message: "Method not allowed" });
    }
};


export default handler;