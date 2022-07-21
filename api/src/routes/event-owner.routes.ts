import { Router } from 'express'
import { EventOwnerController } from "../componentes/eventOwner/EventOwnerController"
import { EventOwnerRepository } from "../componentes/eventOwner/EventOwnerRepository"
import { RegisterEventOwnerService } from '../componentes/eventOwner/services/RegisterEventOwnerService'

const eventOwnerRouters = Router()

const eventOwnerRepository = new EventOwnerRepository()
const registerEventOwnerService = new RegisterEventOwnerService(eventOwnerRepository)
const eventOwnerController = new EventOwnerController(eventOwnerRepository, registerEventOwnerService)

eventOwnerRouters
    .get('/', eventOwnerController.listAllEventeOwner)
    .get(`/:id`, eventOwnerController.findEventOwner)
    .post('/', eventOwnerController.createEventOwner)
    .put('/:id', eventOwnerController.updateEventOwner)
    .delete('/:id', eventOwnerController.deleteEventOwner)

export default eventOwnerRouters;
