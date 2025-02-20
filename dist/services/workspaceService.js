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
exports.getAllWorkspaces = getAllWorkspaces;
exports.getWorkspaceById = getWorkspaceById;
exports.createWorkspace = createWorkspace;
exports.updateWorkspace = updateWorkspace;
exports.deleteWorkspace = deleteWorkspace;
const client_1 = __importDefault(require("../prisma/client"));
function getAllWorkspaces() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client_1.default.workspace.findMany({ include: { owner: true } });
    });
}
function getWorkspaceById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client_1.default.workspace.findUnique({ where: { id }, include: { owner: true } });
    });
}
function createWorkspace(ownerId, description, password) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client_1.default.workspace.create({ data: { ownerId, description, password } });
    });
}
function updateWorkspace(id, description, password) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client_1.default.workspace.update({ where: { id }, data: { description, password } });
    });
}
function deleteWorkspace(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client_1.default.workspace.delete({ where: { id } });
    });
}
