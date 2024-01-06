import Footer from "../../../models/Footer";
import dbConnect from "../../../utils/dbConnect";

const handler = async (req, res) => {
    await dbConnect();
    const {
        method,
        query: { id },
    } = req;

    if (method === "GET") {
        try {
            const footer = await Footer.findById(id);
            res.status(200).json(footer);
        } catch (error) {
            res.status(500).json(error);
        }
    } else if (method === "PUT") {
        try {
            const footer = await Footer.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(footer);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    } else {
        res.status(500).json({ message: "Method not allowed" });
    }
};

export default handler;
