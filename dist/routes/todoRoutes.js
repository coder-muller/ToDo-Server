"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_1 = require("../controllers/todoController");
const router = express_1.default.Router();
router.get("/todos", todoController_1.getTodosController);
router.get("/todos/:id", todoController_1.getTodoController);
router.post("/todos", todoController_1.createTodoController);
router.put("/todos/:id", todoController_1.updateTodoController);
router.delete("/todos/:id", todoController_1.deleteTodoController);
exports.default = router;
