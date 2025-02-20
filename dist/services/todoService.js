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
exports.getAllTodos = getAllTodos;
exports.getTodoById = getTodoById;
exports.createTodo = createTodo;
exports.updateTodo = updateTodo;
exports.deleteTodo = deleteTodo;
const client_1 = __importDefault(require("../prisma/client"));
function getAllTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client_1.default.toDo.findMany({ include: { workspace: true } });
    });
}
function getTodoById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client_1.default.toDo.findUnique({ where: { id }, include: { workspace: true } });
    });
}
function createTodo(workspaceId, activity, dueDate, priority, isDone) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client_1.default.toDo.create({ data: { workspaceId, activity, dueDate, priority, isDone } });
    });
}
function updateTodo(id, activity, dueDate, priority, isDone) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client_1.default.toDo.update({ where: { id }, data: { activity, dueDate, priority, isDone } });
    });
}
function deleteTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client_1.default.toDo.delete({ where: { id } });
    });
}
