import express from "express";
import { getTodosController, getTodoController, createTodoController, updateTodoController, deleteTodoController } from "../controllers/todoController";

const router = express.Router();

router.get("/todos", getTodosController)
router.get("/todos/:id", getTodoController)
router.post("/todos", createTodoController)
router.put("/todos/:id", updateTodoController)
router.delete("/todos/:id", deleteTodoController)

export default router