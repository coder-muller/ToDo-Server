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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
exports.postUser = postUser;
exports.putUser = putUser;
exports.deleteUserById = deleteUserById;
const userService_1 = require("../services/userService");
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield (0, userService_1.getAllUsers)();
            if (users.length === 0) {
                res.status(404).json({ error: "Nenhum usuário cadastrado!" });
                return;
            }
            res.json(users);
        }
        catch (error) {
            console.error("Erro ao buscar usuários:", error);
            res.status(500).json({ error: "Erro ao buscar usuários" });
        }
    });
}
function postUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, password } = req.body;
            if (!name || !email || !password) {
                res.status(400).json({ error: "Todos os campos são obrigatórios" });
                return;
            }
            const user = yield (0, userService_1.createUser)(name, email, password);
            res.json(user);
        }
        catch (error) {
            console.error("Erro ao criar usuário:", error);
            res.status(500).json({ error: "Erro ao criar usuário" });
        }
    });
}
function putUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            if (!name || !email || !password) {
                res.status(400).json({ error: "Todos os campos são obrigatórios" });
                return;
            }
            const user = yield (0, userService_1.updateUser)(Number(id), name, email, password);
            res.json(user);
        }
        catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            res.status(500).json({ error: "Erro ao atualizar usuário" });
        }
    });
}
function deleteUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ error: "ID do usuário é obrigatório" });
                return;
            }
            const user = yield (0, userService_1.deleteUser)(Number(id));
            res.json(user);
        }
        catch (error) {
            console.error("Erro ao deletar usuário:", error);
            res.status(500).json({ error: "Erro ao deletar usuário" });
        }
    });
}
