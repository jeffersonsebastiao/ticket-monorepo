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

    async createEventOwnerRepository(data: ICreateEventOwner) {

        const eventOwnerRepository = await prismaClient.eventOwner.create({
            data: {
                name: data.name,
                email: data.email,
                cpfCpnj: data.cpfCpnj,
                password: data.password,
                phone: data.phone,
                pseudonym: data.pseudonym,
            },
        })

        return eventOwnerRepository
    }
    
}