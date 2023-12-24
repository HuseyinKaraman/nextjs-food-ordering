import dbConnect from "../../../utils/dbConnect";
import Category from "../../../models/Category";

const handler = async (req, res) => {
    await dbConnect();

    const {
        method,
        query: { id },
    } = req;

    if (method === "GET") {
        try {
            const category = await Category.findById(id);
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json(error);
        }
    }else if ( method === "DELETE" ) {
        const categoryRes = await Category.findByIdAndDelete(id);
        res.status(200).json(categoryRes);
    }
    else {
        res.status(405).json({ message: "Method not allowed" });
    }
};

export default handler;
