import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        address: {
            type: String,
            required: true,
            maxlength: 200,
        },
        total: {
            type: Number,
            required: true,
        },
        status: {
            type: Number,
            required: true,
            default:0
        },
        paymentMethod: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
