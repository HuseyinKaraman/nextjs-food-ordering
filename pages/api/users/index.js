import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/Users";

const handler = async (req, res) => {
    await dbConnect();

    const { method } = req;

    if (method === "GET") {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    } else if (method === "POST") {
        try {
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
};

export default handler;
