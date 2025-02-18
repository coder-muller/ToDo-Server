import { Request, Response } from "express";
import { getAllUsers, createUser, updateUser, deleteUser } from "../services/userService";

export async function getUsers(req: Request, res: Response) {
    try {
        const users = await getAllUsers();
        if (users.length === 0) {
            res.status(404).json({ error: "Nenhum usuário cadastrado!" });
            return
        }
        res.json(users);
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        res.status(500).json({ error: "Erro ao buscar usuários" });
    }
}

export async function postUser(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ error: "Todos os campos são obrigatórios" });
            return
        }

        const user = await createUser(name, email, password);
        res.json(user);
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        res.status(500).json({ error: "Erro ao criar usuário" });
    }
}

export async function putUser(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ error: "Todos os campos são obrigatórios" });
            return
        }

        const user = await updateUser(Number(id), name, email, password);
        res.json(user);
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        res.status(500).json({ error: "Erro ao atualizar usuário" });
    }
}

export async function deleteUserById(req: Request, res: Response) {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ error: "ID do usuário é obrigatório" });
            return
        }

        const user = await deleteUser(Number(id));
        res.json(user);
    } catch (error) {
        console.error("Erro ao deletar usuário:", error);
        res.status(500).json({ error: "Erro ao deletar usuário" });
    }
}
