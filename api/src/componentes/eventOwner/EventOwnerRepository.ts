import { prisma, PrismaClient } from "@prisma/client";
import { ICreateEventOwnerDTO } from "./ICreateEventOwner.dto";
import { IUpdateEventOwnerDTO } from "./IUpdateEventOwner.dto";


const prismaClient = new PrismaClient()

export class EventOwnerRepository {

    async createEventOwner(data: ICreateEventOwnerDTO) {
        const eventOwner = await prismaClient.eventOwner.create({
            data: {
                name: data.name,
                email: data.email,
                cpfCpnj: data.cpfCpnj,
                password: data.password,
                phone: data.phone,
                pseudonym: data.pseudonym,
                active: false,
                validationCode: {
                    create: {
                        hash: data.hash,
                        expiredate: data.expiredate 
                    }
                },
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

    async updateEventOwner(data: IUpdateEventOwnerDTO) {
        const updateEventOwner = await prismaClient.eventOwner.update({
            where: {
                id: data.id
            },
            data: {
                name: data.name,
                password: data.password,
                pseudonym: data.pseudonym
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

    async compareEventOwner(email: string): Promise<boolean> {
        const eventOwnerExists = await prismaClient.eventOwner.findFirst({
            where: {
                email
            }
        })

        return eventOwnerExists ? true : false
    }

}