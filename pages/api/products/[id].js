import dbConnect from "../../../utils/dbConnect";
import Product from "../../../models/Product";
import Category from "../../../models/Category";

const handler = async (req, res) => {
    await dbConnect();

    const {
        method,
        query: { id },
    } = req;

    if (method === "GET") {
        try {
            const product = await Product.findById(id).populate({
                path: "categoryId",
                select: "name _id",
                model: Category,
            });
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    } else if (method === "DELETE") {
        const productRes = await Product.findByIdAndDelete(id);
        res.status(200).json(productRes);
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
};

export default handler;
