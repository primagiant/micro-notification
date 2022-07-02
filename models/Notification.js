import mongoose from "mongoose";

const Notification = mongoose.Schema({
    senderId: Number,
    receiverId: Number,
    title: String,
    message: String,
    isRead: Boolean,
}, {
    timestamps: true
});

export default mongoose.model("Notification", Notification);