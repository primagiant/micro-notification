import mongoose from "mongoose";

const Notification = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    // _id: String,
    // userId: mongoose.Schema.Types.ObjectId,
    reqId: String,
    userId: Number,
    title: String,
    message: String,
    isRead: Boolean,
}, {
    timestamps: true
});

export default mongoose.model("Notification", Notification);