import express from "express";
import createUsers, {bookVisit, getAllBookings, cancelBookings} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUsers);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/cancelBookings/:id", cancelBookings);

export default router