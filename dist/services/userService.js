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
exports.getAllUsers = getAllUsers;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
const client_1 = __importDefault(require("../prisma/client"));
const hashUtils_1 = require("../utils/hashUtils");
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client_1.default.user.findMany();
    });
}
function createUser(name, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashedPassword = yield (0, hashUtils_1.hashPassword)(password);
        return yield client_1.default.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                validated: true,
            },
        });
    });
}
function updateUser(id, name, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashedPassword = yield (0, hashUtils_1.hashPassword)(password);
        return yield client_1.default.user.update({
            where: { id },
            data: {
                name,
                email,
                password: hashedPassword,
                validated: true,
            },
        });
    });
}
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client_1.default.user.delete({
            where: { id },
        });
    });
}
