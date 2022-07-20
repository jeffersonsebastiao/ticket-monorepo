import { Router } from 'express'
import { EventOwnerController } from "../componentes/eventOwner/EventOwnerController"
import { EventOwnerRepository } from "../componentes/eventOwner/EventOwnerRepository"

const eventOwnerRouters = Router()

const eventOwnerRepository = new EventOwnerRepository()
const eventOwnerController = new EventOwnerController(eventOwnerRepository)

eventOwnerRouters
    .get('/', eventOwnerController.listAllEventeOwner)
    .get(`/:id`, eventOwnerController.findEventOwner)
    .post('/', eventOwnerController.createEventOwner)
    .put('/:id', eventOwnerController.updateEventOwner)
    .delete('/:id', eventOwnerController.deleteEventOwner)

export default eventOwnerRouters;
