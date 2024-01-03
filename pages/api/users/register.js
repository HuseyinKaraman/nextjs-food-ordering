import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";
import bcrypt from "bcrypt";

const handler = async (req, res) => {
    await dbConnect();
    const { fullName, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }

    try {
        const newUser = await new User({fullName,email,password});
        // generate salt to hash password
        const salt = await bcrypt.genSalt(10);
        // create hash
        newUser.password = await bcrypt.hash(newUser.password, salt);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
    }
};

export default handler;
