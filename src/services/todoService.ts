import prisma from "../prisma/client";

export async function getAllTodos() {
    return await prisma.toDo.findMany({ include: { workspace: true } });
}

export async function getTodoById(id: number) {
    return await prisma.toDo.findUnique({ where: { id }, include: { workspace: true } });
}

export async function createTodo(workspaceId: number, activity: string, dueDate: Date, priority: string, isDone: boolean) {
    return await prisma.toDo.create({ data: { workspaceId, activity, dueDate, priority, isDone } });
}

export async function updateTodo(id: number, activity: string, dueDate: Date, priority: string, isDone: boolean) {
    return await prisma.toDo.update({ where: { id }, data: { activity, dueDate, priority, isDone } });
}

export async function deleteTodo(id: number) {
    return await prisma.toDo.delete({ where: { id } });
}