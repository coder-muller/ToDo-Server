import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET;

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({ error: "Token não fornecido" });
        return
    }

    if (!SECRET_KEY) {
        res.status(500).json({ error: "Chave de segurança nao encontrada" });
        return
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, SECRET_KEY, (err) => {
        if (err) {
            res.status(403).json({ error: "Token inválido ou expirado" });
            return
        }
        next();
    });
}
