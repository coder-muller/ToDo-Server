import { Request, Response } from "express";
import { createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo } from "../services/todoService";

export async function getTodosController(req: Request, res: Response) {
    try {
        const todos = await getAllTodos();
        res.json(todos);
    } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
        res.status(500).json({ error: "Erro ao buscar tarefas" });
    }
}

export async function getTodoController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const todo = await getTodoById(Number(id));
        res.json(todo);
    } catch (error) {
        console.error("Erro ao buscar tarefa:", error);
        res.status(500).json({ error: "Erro ao buscar tarefa" });
    }
}

export async function createTodoController(req: Request, res: Response) {
    try {
        const { workspaceId, activity, dueDate, priority, isDone } = req.body;

        if (!workspaceId || !activity || !dueDate || !priority) {
            res.status(400).json({ error: "Todos os campos são obrigatórios" });
            return
        }

        if (isNaN(new Date(dueDate).getTime())) {
            res.status(400).json({ error: "Data inválida" });
            return
        }

        const todo = await createTodo(Number(workspaceId), activity, new Date(dueDate), priority, Boolean(isDone));
        res.json(todo);
    } catch (error) {
        console.error("Erro ao criar tarefa:", error);
        res.status(500).json({ error: "Erro ao criar tarefa" });
    }
}

export async function updateTodoController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { activity, dueDate, priority, isDone } = req.body;

        if (!activity || !dueDate || !priority) {
            res.status(400).json({ error: "Todos os campos são obrigatórios" });
            return
        }

        if (isNaN(new Date(dueDate).getTime())) {
            res.status(400).json({ error: "Data inválida" });
            return
        }

        const todo = await updateTodo(Number(id), activity, new Date(dueDate), priority, Boolean(isDone));
        res.json(todo);
    } catch (error) {
        console.error("Erro ao atualizar tarefa:", error);
        res.status(500).json({ error: "Erro ao atualizar tarefa" });
    }
}

export async function deleteTodoController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const todo = await deleteTodo(Number(id));
        res.json(todo);
    } catch (error) {
        console.error("Erro ao deletar tarefa:", error);
        res.status(500).json({ error: "Erro ao deletar tarefa" });
    }
}