import prisma from "../prisma/client";
import { hashPassword } from "../utils/hashUtils";

export async function getAllUsers() {
    return await prisma.user.findMany();
}

export async function createUser(name: string, email: string, password: string) {
    const hashedPassword = await hashPassword(password);

    return await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            validated: true,
        },
    });
}

export async function updateUser(id: number, name: string, email: string, password: string) {
    const hashedPassword = await hashPassword(password);

    return await prisma.user.update({
        where: { id },
        data: {
            name,
            email,
            password: hashedPassword,
            validated: true,
        },
    });
}

export async function deleteUser(id: number) {
    return await prisma.user.delete({
        where: { id },
    });
}
