import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient()

interface ICreateEventOwner {
    name: string;
    email: string;
    cpfCpnj: number;
    password: string;
    phone: number;
    pseudonym: string;
}

export class EventOwnerRepository {

    async createEventOwner(data: ICreateEventOwner) {
        const eventOwner = await prismaClient.eventOwner.create({
            data: {
                name: data.name,
                email: data.email,
                cpfCpnj: data.cpfCpnj,
                password: data.password,
                phone: data.phone,
                pseudonym: data.pseudonym,
            },
        })

        return eventOwner
    }

    async listAllEventeOwner() {
        const listAllEventeOwner = await prismaClient.eventOwner.findMany()

        return listAllEventeOwner;
    }

    async findEventOwner(id: number) {

        const findEventOwner = await prismaClient.eventOwner.findUnique({
            where: {
                id
            }
        })

        return findEventOwner
    }

    async updateEventOwner(name: string, password: string, pseudonym: string, id: number) {
        const updateEventOwner = await prismaClient.eventOwner.update({
            where: {
                id
            },
            data: {
                name,
                password,
                pseudonym
            }
        })

        return updateEventOwner

    }

    async deleteEventOwner(id: number) {
        await prismaClient.eventOwner.delete({
            where: {
                id
            }
        })
    }
}