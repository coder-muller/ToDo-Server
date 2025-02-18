import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import { authenticateToken } from "./middlewares/authMiddleware";

const app = express();

app.use(express.json());
app.use(cors());

// Rotas públicas
app.use("/api/auth", authRoutes);

// Rotas protegidas
app.use("/api", authenticateToken, userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

// Encerramento correto do Prisma
import prisma from "./prisma/client";
process.on("SIGINT", async () => {
    await prisma.$disconnect();
    process.exit(0);
});
