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
exports.getWorkspacesController = getWorkspacesController;
exports.getWorkspaceController = getWorkspaceController;
exports.createWorkspaceController = createWorkspaceController;
exports.updateWorkspaceController = updateWorkspaceController;
exports.deleteWorkspaceController = deleteWorkspaceController;
const workspaceService_1 = require("../services/workspaceService");
function getWorkspacesController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const workspaces = yield (0, workspaceService_1.getAllWorkspaces)();
            res.json(workspaces);
        }
        catch (error) {
            console.error("Erro ao buscar workspaces:", error);
            res.status(500).json({ error: "Erro ao buscar workspaces" });
        }
    });
}
function getWorkspaceController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const workspace = yield (0, workspaceService_1.getWorkspaceById)(Number(id));
            res.json(workspace);
        }
        catch (error) {
            console.error("Erro ao buscar workspace:", error);
            res.status(500).json({ error: "Erro ao buscar workspace" });
        }
    });
}
function createWorkspaceController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { ownerId, description, password } = req.body;
            const workspace = yield (0, workspaceService_1.createWorkspace)(Number(ownerId), description, password);
            res.json(workspace);
        }
        catch (error) {
            console.error("Erro ao criar workspace:", error);
            res.status(500).json({ error: "Erro ao criar workspace" });
        }
    });
}
function updateWorkspaceController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { description, password } = req.body;
            const workspace = yield (0, workspaceService_1.updateWorkspace)(Number(id), description, password);
            res.json(workspace);
        }
        catch (error) {
            console.error("Erro ao atualizar workspace:", error);
            res.status(500).json({ error: "Erro ao atualizar workspace" });
        }
    });
}
function deleteWorkspaceController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const workspace = yield (0, workspaceService_1.deleteWorkspace)(Number(id));
            res.json(workspace);
        }
        catch (error) {
            console.error("Erro ao deletar workspace:", error);
            res.status(500).json({ error: "Erro ao deletar workspace" });
        }
    });
}
