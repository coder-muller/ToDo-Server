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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const workspaceRoutes_1 = __importDefault(require("./routes/workspaceRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const authMiddleware_1 = require("./middlewares/authMiddleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Rota teste
app.get("/", (req, res) => {
    res.send("Welcome to the Docker + PostgreSQL API!");
});
// Rotas públicas
app.use("/api/auth", authRoutes_1.default);
app.use("/api", userRoutes_1.default);
// Rotas protegidas
app.use("/api", authMiddleware_1.authenticateToken, workspaceRoutes_1.default);
app.use("/api", authMiddleware_1.authenticateToken, todoRoutes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
// Encerramento correto do Prisma
const client_1 = __importDefault(require("./prisma/client"));
process.on("SIGINT", () => __awaiter(void 0, void 0, void 0, function* () {
    yield client_1.default.$disconnect();
    process.exit(0);
}));
