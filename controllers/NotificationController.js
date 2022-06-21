import Notification from "../models/Notification.js";

// get all Notification
export const getAllNotification = async (req, res) => {
    try {
        const notifications = await Notification.find();
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

// get Notification by id
export const getNotificationID = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);
        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

// save Notification
export const saveNotification = async (req, res) => {
    try {
        const notification = new Notification(req.body);
        const result = await notification.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

// update Notification
export const updateNotification = async (req, res) => {
    try {
        const notification = await Notification.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

// delete Notification
export const deleteNotification = async (req, res) => {
    try {
        const notification = await Notification.findByIdAndDelete(req.params.id);
        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}