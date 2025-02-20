"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodosController = getTodosController;
exports.getTodoController = getTodoController;
exports.createTodoController = createTodoController;
exports.updateTodoController = updateTodoController;
exports.deleteTodoController = deleteTodoController;
const todoService_1 = require("../services/todoService");
function getTodosController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todos = yield (0, todoService_1.getAllTodos)();
            res.json(todos);
        }
        catch (error) {
            console.error("Erro ao buscar tarefas:", error);
            res.status(500).json({ error: "Erro ao buscar tarefas" });
        }
    });
}
function getTodoController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const todo = yield (0, todoService_1.getTodoById)(Number(id));
            res.json(todo);
        }
        catch (error) {
            console.error("Erro ao buscar tarefa:", error);
            res.status(500).json({ error: "Erro ao buscar tarefa" });
        }
    });
}
function createTodoController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { workspaceId, activity, dueDate, priority, isDone } = req.body;
            if (!workspaceId || !activity || !dueDate || !priority) {
                res.status(400).json({ error: "Todos os campos são obrigatórios" });
                return;
            }
            if (isNaN(new Date(dueDate).getTime())) {
                res.status(400).json({ error: "Data inválida" });
                return;
            }
            const todo = yield (0, todoService_1.createTodo)(Number(workspaceId), activity, new Date(dueDate), priority, Boolean(isDone));
            res.json(todo);
        }
        catch (error) {
            console.error("Erro ao criar tarefa:", error);
            res.status(500).json({ error: "Erro ao criar tarefa" });
        }
    });
}
function updateTodoController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { activity, dueDate, priority, isDone } = req.body;
            if (!activity || !dueDate || !priority) {
                res.status(400).json({ error: "Todos os campos são obrigatórios" });
                return;
            }
            if (isNaN(new Date(dueDate).getTime())) {
                res.status(400).json({ error: "Data inválida" });
                return;
            }
            const todo = yield (0, todoService_1.updateTodo)(Number(id), activity, new Date(dueDate), priority, Boolean(isDone));
            res.json(todo);
        }
        catch (error) {
            console.error("Erro ao atualizar tarefa:", error);
            res.status(500).json({ error: "Erro ao atualizar tarefa" });
        }
    });
}
function deleteTodoController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const todo = yield (0, todoService_1.deleteTodo)(Number(id));
            res.json(todo);
        }
        catch (error) {
            console.error("Erro ao deletar tarefa:", error);
            res.status(500).json({ error: "Erro ao deletar tarefa" });
        }
    });
}
