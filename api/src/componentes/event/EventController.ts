import { Request, Response } from "express";
import { CreateEventService } from "./services/CreateEventService";
import { verify } from "jsonwebtoken";
import { ICreateEvent } from "./ICreateEvent.dto";
import { bind } from "decko";


export class EventController {

    constructor(private readonly createEventService: CreateEventService) { }

    @bind
    async createEvent(request: Request, response: Response) {

        const token = request.headers['authorization']
        const { address, city, description, eventDateHour, eventOwnerId, number, state, ticketLimit, title, zipCode }: ICreateEvent = request.body

        try {

            if (!token) {
                throw new Error('error, invalid token')
            }
            const decodedID = verify(token, 'key') as { id: number }

            const eventService = await this.createEventService.handle({ address, city, description, eventDateHour, eventOwnerId: decodedID.id, number, state, ticketLimit, title, zipCode })

            return response.status(201).json(eventService)
        } catch (error) {

            if (error instanceof Error) {
                return response.status(401).json(error.message)
            }

        }




    }
}