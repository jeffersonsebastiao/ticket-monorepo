import { Request, Response } from "express";
import { EventOwnerRepository } from "./EventOwnerRepository";

export class EventOwnerController {
    constructor(private readonly eventOwnerRepository: EventOwnerRepository) { }

    async eventowner(request: Request, response: Response) {
        const { name, email, cpfCpnj, password, phone, pseudonym } = request.body

        const ownerRepo = await this.eventOwnerRepository.createEventOwner({
            name,
            email,
            cpfCpnj,
            password,
            phone,
            pseudonym
        })

        return response.send(ownerRepo)
    }
}