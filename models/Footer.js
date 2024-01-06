import mongoose from "mongoose";

const footerSchema = new mongoose.Schema(
    {
        location: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        socialMedia: {
            type: [
                {
                    icon: {
                        type: String,
                        required: true,
                    },
                    link: {
                        type: String,
                        required: true,
                    },
                },
            ],
        },
        openingHours: {
            type: {
                day: {
                    type: String,
                },
                time: {
                    type: String,
                },
            },
        },
    },
    { timestamps: true }
);

export default mongoose.models.Footer || mongoose.model("Footer", footerSchema);
