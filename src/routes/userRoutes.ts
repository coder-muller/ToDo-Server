import express from "express";
import { getUsers, getUser, postUser, putUser, deleteUserById } from "../controllers/userController";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", postUser);
router.put("/users/:id", putUser);
router.delete("/users/:id", deleteUserById);

export default router;
