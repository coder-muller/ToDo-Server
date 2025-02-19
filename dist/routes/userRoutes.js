"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.get("/users", userController_1.getUsers);
router.get("/users/:id", userController_1.getUser);
router.post("/users", userController_1.postUser);
router.put("/users/:id", userController_1.putUser);
router.delete("/users/:id", userController_1.deleteUserById);
exports.default = router;
