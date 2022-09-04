import { Request, Response } from "express";
import { CreateEventService } from "./services/CreateEventService";
import { verify } from "jsonwebtoken";
import { ICreateEvent } from "./ICreateEvent.dto";
import { bind } from "decko";


export class EventController {

    constructor(private readonly createEventService: CreateEventService) { }

    @bind
    async createEvent(request: Request, response: Response) {
        const { id } = request.context.user

        const { address, city, description, eventDateHour, number, state, ticketLimit, title, zipCode }: ICreateEvent = request.body

        try {

            const eventService = await this.createEventService.handle({ address, city, description, eventDateHour, eventOwnerId: id, number, state, ticketLimit, title, zipCode })

            return response.status(201).json(eventService)
        } catch (error) {

            if (error instanceof Error) {
                return response.status(401).json(error.message)
            }

        }




    }
}