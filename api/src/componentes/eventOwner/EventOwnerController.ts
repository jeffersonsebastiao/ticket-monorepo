import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { EventOwnerRepository } from "./EventOwnerRepository";
import { request } from "http";

const prismaClient = new PrismaClient()

export class EventOwnerController {
    constructor(private readonly eventOwnerRepository: EventOwnerRepository) { }

    // Cria Um EventOwner
    async createEventOwner(request: Request, response: Response) {

        const { name, email, cpfCpnj, password, phone, pseudonym } = request.body

        const eventOwnerRepository = await this.eventOwnerRepository.createEventOwnerRepository({
            name,
            email,
            cpfCpnj,
            password,
            phone,
            pseudonym
        })

        return response.send(eventOwnerRepository)
    }

    // Retorna todos os registros
    async listAllEventeOwner(request: Request, response: Response) {

        const listAllEventeOwner = await prismaClient.eventOwner.findMany()

        return response.send(listAllEventeOwner)
    }


    // Encontra um registro pelo id na URL
    async findEventOwner(response: Response, id: number) {

        const findEventOwner = await prismaClient.eventOwner.findUnique({
            where: {
                id
            }
        })

        if (!(findEventOwner))
            return response.status(404).send('usuario invalido!')
            

        
        return response.send(findEventOwner)
    }

    // Atualiza dados do eventowner
    async updateEventOwner(request: Request, response: Response, id: number) {
 
         const { name, password, pseudonym } = request.body
 
         const updateEventOwner = await prismaClient.eventOwner.update({
             where: {
                 id
             },
             data: {
                 name,
                 password,
                 pseudonym
             }
         })
 
         return response.send(updateEventOwner)
 
     }

     //Deletar eventowner
     async deleteEventOwner(response: Response, id: number){
        
        const deleteEventOwner = await prismaClient.eventOwner.delete({
            where: {
                id
            }            
        })

     }

}