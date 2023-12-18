import cookie from "cookie";
import bcrypt from "bcrypt";



// !! TODO: change later method! jwt token ayarlanması lazım!
const handler = async (req, res) => {
    const { method } = req;

    if (method === "POST") {
        const { username, password } = req.body;
        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
            res.setHeader(
                "Set-Cookie",
                cookie.serialize("token", process.env.ADMIN_TOKEN, {
                    maxAge: 60 * 60,
                    sameSite: "strict",
                    path: "/",
                })
            ).status(200).json({ message: "Success" });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    }else if (method === "PUT") {
            res.setHeader("Set-Cookie",cookie.serialize("token", process.env.ADMIN_TOKEN, { maxAge: -1, path: "/",}))
            .status(200).json({ message: "Success" });

        } else {
        res.status(405).json({ message: "Method not allowed" });
    }
};


export default handler;