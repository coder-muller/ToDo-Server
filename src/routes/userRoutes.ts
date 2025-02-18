import express from "express";
import { getUsers, postUser, putUser, deleteUserById } from "../controllers/userController";

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", postUser);
router.put("/users/:id", putUser);
router.delete("/users/:id", deleteUserById);

export default router;
