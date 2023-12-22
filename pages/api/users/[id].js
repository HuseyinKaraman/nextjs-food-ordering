import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/Users";
import bcrypt from "bcrypt";

const handler = async (req, res) => {
    await dbConnect();

    const {
        method,
        query: { id },
    } = req;

    if (method === "GET") {
        try {
            const users = await User.findById(id).select("-password");
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    }else if(method === "PUT"){
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }

        try {
            const user = await User.findByIdAndUpdate(id, req.body, {
                new : true
            }) 
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({message:"something went wrong"});
        }
    } 
    else {
        res.status(405).json({ message: "Method not allowed" });
    }
};

export default handler;
