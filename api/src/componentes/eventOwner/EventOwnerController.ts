import { bind } from "decko";
import { Request, Response } from "express";
import { EventOwnerRepository } from "./EventOwnerRepository";
import { ICreateEventOwnerDTO } from "./ICreateEventOwner.dto";
import { IUpdateEventOwnerDTO } from "./IUpdateEventOwner.dto";
import { LoginService } from "./services/LoginService";
import { RegisterEventOwnerService } from "./services/RegisterEventOwnerService";
import { ValidateEventOwnerService } from "./services/ValidateEventOwnerService";

export class EventOwnerController {
    constructor(
        private readonly eventOwnerRepository: EventOwnerRepository,
        private readonly registerEventOwner: RegisterEventOwnerService,
        private readonly validateEventOwnerService: ValidateEventOwnerService,
        private readonly loginService: LoginService
    ) { }

    @bind
    public async createEventOwner(request: Request, response: Response) {
        const { name, email, cpfCpnj, password, phone, pseudonym, confirmPassword }: ICreateEventOwnerDTO = request.body

        try {
            await this.registerEventOwner.handle({
                name,
                email,
                cpfCpnj,
                password,
                phone,
                pseudonym,
                confirmPassword,
            })
            return response.status(204).json()
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json(error.message)
            }
            return response.status(400).json('Error')
        }
    }

    @bind
    async listAllEventeOwner(request: Request, response: Response) {

        try {
            const listAllEventeOwner = await this.eventOwnerRepository.listAllEventeOwner()
            return response.json(listAllEventeOwner)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json(error.message)
            }
            return response.status(400).json('Error')
        }
    }

    @bind
    async findEventOwner(request: Request, response: Response) {
        const id = parseInt(request.params.id)
        try {
            const findEventOwner = await this.eventOwnerRepository.findEventOwner(id)
            if (!findEventOwner) {
                return response.status(404).json('usuario invalido!')
            }
            return response.json(findEventOwner)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json(error.message)
            }
            return response.status(400).json('Error')
        }
    }

    @bind
    async updateEventOwner(request: Request, response: Response) {
        const { name, password, pseudonym }: IUpdateEventOwnerDTO = request.body
        const id = parseInt(request.params.id)

        try {
            const updateEventOwner = await this.eventOwnerRepository.updateEventOwner({ id, name, password, pseudonym })
            return response.json(updateEventOwner)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json(error.message)
            }
            return response.status(400).json('Error')
        }
    }

    @bind
    async deleteEventOwner(request: Request, response: Response) {
        const id = parseInt(request.params.id)

        try {
            await this.eventOwnerRepository.deleteEventOwner(id)
            return response.status(204).json()
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json(error.message)
            }
            return response.status(400).json('Error')
        }
    }

    @bind
    async validateEventOwner(request: Request, response: Response) {
        const hash = request.params.hash

        try {
            await this.validateEventOwnerService.handle(hash)
            return response.json('Sucesso!')
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json(error.message)
            }
            return response.status(400).json('Error')
        }
    }

    @bind
    async loginEventOwner(request: Request, response: Response) {
        const { email, senha } = request.body

        try {
            const token = await this.loginService.handle(email, senha)
            return response.json(token)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json(error.message)
            }
            return response.status(400).json('Error')
        }
    }
}