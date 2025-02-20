import prisma from "../prisma/client";

export async function getAllWorkspaces() {
    return await prisma.workspace.findMany({ include: { owner: true } });
}

export async function getWorkspaceById(id: number) {
    return await prisma.workspace.findUnique({ where: { id }, include: { owner: true } });
}

export async function createWorkspace(ownerId: number, description: string, password: string) {
    return await prisma.workspace.create({ data: { ownerId, description, password } });
}

export async function updateWorkspace(id: number, description: string, password: string) {
    return await prisma.workspace.update({ where: { id }, data: { description, password } });
}

export async function deleteWorkspace(id: number) {
    return await prisma.workspace.delete({ where: { id } });
}