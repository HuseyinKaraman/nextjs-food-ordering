import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../utils/mongo";
import User from "../../../models/Users";
import dbConnect from "../../../utils/dbConnect";
import bcrypt from "bcrypt";

dbConnect();

export const authOptions = {
    // adapter : MongoDBAdapter(clientPromise),
    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60, // 1 days
    },
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            // https://next-auth.js.org/configuration/providers/credentials
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "Enter your email" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials) {
                const email = credentials.email;
                const password = credentials.password;
                const user = await User.findOne({ email: email });

                if (user) {
                    return signInUser({ user, password });
                }
                throw new Error("You haven't registered with us yet!");
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
        signUp: "/auth/register",
    },
    database: process.env.MONGODB_URI,
    secret: "s3cret",
    callbacks: {
        session: ({ session, token, user }) => {
            if (token) {
                session.user._id = token.sub;
            }
            return session;
        },
    },
};

export default NextAuth(authOptions);

const signInUser = async ({ user, password }) => {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid credentials");
    }
    return user;
};
