import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: 60,
        },
        desc: {
            type: String,
            required: true,
            maxlength: 240,
        },
        prices: {
            type: [Number],
            required: true,
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        extraOptions: {
            type: [
                {
                    text: {
                        type: String,
                    },
                    price: {
                        type: Number,
                    },
                }
            ],
        },
    },
    { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", productSchema);
