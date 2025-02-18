"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = authenticateToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.JWT_SECRET;
function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).json({ error: "Token não fornecido" });
        return;
    }
    if (!SECRET_KEY) {
        res.status(500).json({ error: "Chave de segurança nao encontrada" });
        return;
    }
    const token = authHeader.split(" ")[1];
    jsonwebtoken_1.default.verify(token, SECRET_KEY, (err) => {
        if (err) {
            res.status(403).json({ error: "Token inválido ou expirado" });
            return;
        }
        next();
    });
}
