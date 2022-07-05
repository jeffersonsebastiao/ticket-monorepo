import { PrismaClient } from "@prisma/client";

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
        const prisma = new PrismaClient()

        const newEventOwner = await prisma.eventOwner.create({
            data: {
                name: data.name,
                email: data.email,
                cpfCpnj: data.cpfCpnj,
                password: data.password,
                phone: data.phone,
                pseudonym: data.pseudonym,
            }
        })
        
        return newEventOwner
    }
}