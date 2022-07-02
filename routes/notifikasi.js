import express from "express";
const router = express.Router();

// import controllers
import { getAllNotification, getNotificationBySender, getNotificationByReceiver, saveNotification, updateNotification, deleteNotification } from "../controllers/NotificationController.js";

// this is your routes
router.get('/', getAllNotification);
router.get('/:receiverId/receive', getNotificationByReceiver);
router.get('/:senderId/send', getNotificationBySender);
router.post('/', saveNotification);
router.put('/:id', updateNotification);
router.delete('/:id', deleteNotification);

export default router;