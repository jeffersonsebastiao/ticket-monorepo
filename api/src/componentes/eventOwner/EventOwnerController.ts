import { bind } from "decko";
import { Request, Response } from "express";
import { EventOwnerRepository } from "./EventOwnerRepository";
import { ICreateEventOwnerDTO } from "./ICreateEventOwner.dto";
import { IUpdateEventOwnerDTO } from "./IUpdateEventOwner.dto";
import { RegisterEventOwnerService } from "./services/RegisterEventOwnerService";

export class EventOwnerController {
    constructor(private readonly eventOwnerRepository: EventOwnerRepository, private readonly registerEventOwner: RegisterEventOwnerService) { }

    // Cria Um EventOwner
    @bind
    public async createEventOwner(request: Request, response: Response) {
        const { name, email, cpfCpnj, password, phone, pseudonym, confirmPassword }: ICreateEventOwnerDTO = request.body
        await this.registerEventOwner.handle({
            name,
            email,
            cpfCpnj,
            password,
            phone,
            pseudonym,
            confirmPassword
        })

        return response.status(204).send()
    }

    // Retorna todos os registros
    @bind
    async listAllEventeOwner(request: Request, response: Response) {

        const listAllEventeOwner = await this.eventOwnerRepository.listAllEventeOwner()

        return response.send(listAllEventeOwner)
    }


    // Encontra um registro pelo id na URL
    @bind
    async findEventOwner(request: Request, response: Response) {
        const id = parseInt(request.params.id)
        const findEventOwner = await this.eventOwnerRepository.findEventOwner(id)

        if (!findEventOwner) {
            return response.status(404).send('usuario invalido!')
        }

        return response.send(findEventOwner)
    }

    // Atualiza dados do eventowner
    @bind
    async updateEventOwner(request: Request, response: Response) {
        const { name, password, pseudonym }: IUpdateEventOwnerDTO = request.body
        const id = parseInt(request.params.id)
        const updateEventOwner = await this.eventOwnerRepository.updateEventOwner({ id, name, password, pseudonym })

        return response.send(updateEventOwner)

    }

    //Deletar eventowner
    @bind
    async deleteEventOwner(request: Request, response: Response) {
        const id = parseInt(request.params.id)
        await this.eventOwnerRepository.deleteEventOwner(id)
        return response.status(204).send()
    }

}





