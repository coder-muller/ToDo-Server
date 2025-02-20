import { Request, Response } from "express";
import { createWorkspace, deleteWorkspace, getAllWorkspaces, getWorkspaceById, updateWorkspace } from "../services/workspaceService";

export async function getWorkspacesController(req: Request, res: Response) {
    try {
        const workspaces = await getAllWorkspaces();
        res.json(workspaces);
    } catch (error) {
        console.error("Erro ao buscar workspaces:", error);
        res.status(500).json({ error: "Erro ao buscar workspaces" });
    }
}

export async function getWorkspaceController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const workspace = await getWorkspaceById(Number(id));
        res.json(workspace);
    } catch (error) {
        console.error("Erro ao buscar workspace:", error);
        res.status(500).json({ error: "Erro ao buscar workspace" });
    }
}

export async function createWorkspaceController(req: Request, res: Response) {
    try {
        const { ownerId, description, password } = req.body;
        const workspace = await createWorkspace(Number(ownerId), description, password);
        res.json(workspace);
    } catch (error) {
        console.error("Erro ao criar workspace:", error);
        res.status(500).json({ error: "Erro ao criar workspace" });
    }
}

export async function updateWorkspaceController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { description, password } = req.body;
        const workspace = await updateWorkspace(Number(id), description, password);
        res.json(workspace);
    } catch (error) {
        console.error("Erro ao atualizar workspace:", error);
        res.status(500).json({ error: "Erro ao atualizar workspace" });
    }
}

export async function deleteWorkspaceController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const workspace = await deleteWorkspace(Number(id));
        res.json(workspace);
    } catch (error) {
        console.error("Erro ao deletar workspace:", error);
        res.status(500).json({ error: "Erro ao deletar workspace" });
    }
}

