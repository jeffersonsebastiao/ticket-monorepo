import { Router } from 'express'
import { EventOwnerController } from "../componentes/eventOwner/EventOwnerController"
import { EventOwnerRepository } from "../componentes/eventOwner/EventOwnerRepository"

const eventOwnerRepository = new EventOwnerRepository()
const eventOwnerController = new EventOwnerController(eventOwnerRepository)

const eventOwnerRouters = Router()

eventOwnerRouters.post('/sayhello', function (request, response) {
    return eventOwnerController.eventowner(request, response)
})

export default eventOwnerRouters;
