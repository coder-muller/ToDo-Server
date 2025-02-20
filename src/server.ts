import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import workspaceRoutes from "./routes/workspaceRoutes";
import authRoutes from "./routes/authRoutes";
import todosRoutes from "./routes/todoRoutes";
import { authenticateToken } from "./middlewares/authMiddleware";

const app = express();

app.use(express.json());
app.use(cors());

//Rota teste
app.get("/", (req, res) => {
    res.send("Welcome to the Docker + PostgreSQL API!");
});

// Rotas públicas
app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);

// Rotas protegidas
app.use("/api", authenticateToken, workspaceRoutes);
app.use("/api", authenticateToken, todosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

// Encerramento correto do Prisma
import prisma from "./prisma/client";
process.on("SIGINT", async () => {
    await prisma.$disconnect();
    process.exit(0);
});
