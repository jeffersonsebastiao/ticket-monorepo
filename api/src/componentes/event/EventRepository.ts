import { PrismaClient } from "@prisma/client";
import { ICreateEvent } from "./ICreateEvent.dto";

const prismaClient = new PrismaClient()

export class EventRepository {

    async createEvent(data: ICreateEvent) {

        const createEvent = await prismaClient.event.create({
            data: {
                title: data.title,
                description: data.description,
                ticketLimit: data.ticketLimit,
                eventDateHour: data.eventDateHour,
                state: data.state,
                city: data.city,
                address: data.address,
                zipCode: data.zipCode,
                number: data.number,
                eventOwnerId: data.eventOwnerId,

            }
        })

        return createEvent
    }

    async findEvent(id: string) {

    }

}