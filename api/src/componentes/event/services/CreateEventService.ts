import { validateBr } from "js-brasil";
import { EventRepository } from "../EventRepository";
import { ICreateEvent } from "../ICreateEvent.dto";

export class CreateEventService {

    constructor(private readonly eventRepository: EventRepository) { }

    async handle(data: ICreateEvent) {

        const dataD = new Date(data.eventDateHour)

        if (dataD.getTime() < Date.now()) {
            throw new Error('Invalid dateTime')
        }

        if (!validateBr.cep(data.zipCode)) {
            throw new Error('Cep invalid')
        }



        const eventOwner = await this.eventRepository.createEvent({ address: data.address, city: data.city, description: data.description, eventDateHour: dataD, eventOwnerId: data.eventOwnerId, number: data.number, state: data.state, zipCode: data.zipCode, ticketLimit: data.ticketLimit, title: data.title })

        return eventOwner
    }

}