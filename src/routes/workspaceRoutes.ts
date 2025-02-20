import express from "express";
import { createWorkspaceController, deleteWorkspaceController, getWorkspaceController, getWorkspacesController, updateWorkspaceController } from "../controllers/workspaceController";

const router = express.Router();

router.get('/workspaces', getWorkspacesController);
router.get('/workspaces/:id', getWorkspaceController);
router.post('/workspaces', createWorkspaceController);
router.put('/workspaces/:id', updateWorkspaceController);
router.delete('/workspaces/:id', deleteWorkspaceController);

export default router;



