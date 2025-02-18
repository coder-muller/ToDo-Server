import { Request, Response } from "express";
import { loginUser } from "../services/authService";

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: "Email e senha são obrigatórios" });
            return
        }

        const authData = await loginUser(email, password);
        res.json(authData);
    } catch (error) {
        res.status(401).json({ message: "Email ou senha incorretos" });
        console.error("Erro ao fazer login:", error);
    }
}
