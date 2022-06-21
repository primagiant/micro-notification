import express from "express";
const router = express.Router();

// import controllers
import { getAllNotification, getNotificationID, saveNotification, updateNotification, deleteNotification } from "../controllers/NotificationController.js";

// this is your routes
router.get('/', getAllNotification);
router.get('/:id', getNotificationID);
router.post('/', saveNotification);
router.put('/:id', updateNotification);
router.delete('/:id', deleteNotification);

export default router;