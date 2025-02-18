import prisma from "../prisma/client";
import jwt from "jsonwebtoken";
import { comparePassword } from "../utils/hashUtils";

const SECRET_KEY = process.env.JWT_SECRET;

export async function loginUser(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        throw new Error("Usuário não encontrado");
    }

    if (!user.validated) {
        throw new Error("Usuário nao validado");
    }

    if (!SECRET_KEY){
        throw new Error("Chave de segurança nao encontrada");
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Senha incorreta");
    }

    const token = jwt.sign(
        { userId: user.id, email: user.email },
        SECRET_KEY,
        { expiresIn: "1h" } 
    );

    return { token, userId: user.id, email: user.email, name: user.name };
}
