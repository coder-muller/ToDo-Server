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
exports.loginUser = loginUser;
const client_1 = __importDefault(require("../prisma/client"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const hashUtils_1 = require("../utils/hashUtils");
const SECRET_KEY = process.env.JWT_SECRET;
function loginUser(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client_1.default.user.findUnique({ where: { email } });
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        if (!user.validated) {
            throw new Error("Usuário nao validado");
        }
        if (!SECRET_KEY) {
            throw new Error("Chave de segurança nao encontrada");
        }
        const isPasswordValid = yield (0, hashUtils_1.comparePassword)(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Senha incorreta");
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });
        return { token, userId: user.id, email: user.email, name: user.name };
    });
}
