"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const workspaceController_1 = require("../controllers/workspaceController");
const router = express_1.default.Router();
router.get('/workspaces', workspaceController_1.getWorkspacesController);
router.get('/workspaces/:id', workspaceController_1.getWorkspaceController);
router.post('/workspaces', workspaceController_1.createWorkspaceController);
router.put('/workspaces/:id', workspaceController_1.updateWorkspaceController);
router.delete('/workspaces/:id', workspaceController_1.deleteWorkspaceController);
exports.default = router;
