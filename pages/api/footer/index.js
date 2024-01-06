import Footer from "../../../models/Footer";
import dbConnect from "../../../utils/dbConnect";


const handler = async (req, res) => {
    await dbConnect();
    const { method } = req;

    if (method === "GET") {
        try {
            const footer = await Footer.find();
            res.status(200).json(footer);
        } catch (error) {
            res.status(500).json(error);
        }
    } else if (method === "POST") {
        try {
            const newFooter = await Footer.create(req.body);
            res.status(201).json(newFooter);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    } else if (method === "PUT") {
        try {
            const newFooter = await Footer.findByIdAndUpdate(req.body);
            res.status(201).json(newFooter);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    } else {
        res.status(500).json({ message: "Method not allowed" });
    }
};

export default handler;
