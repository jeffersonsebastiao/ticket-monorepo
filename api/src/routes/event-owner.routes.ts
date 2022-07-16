import { Router } from 'express'
import { EventOwnerController } from "../componentes/eventOwner/EventOwnerController"
import { EventOwnerRepository } from "../componentes/eventOwner/EventOwnerRepository"

const eventOwnerRouters = Router()

const eventOwnerRepository = new EventOwnerRepository()
const eventOwnerController = new EventOwnerController(eventOwnerRepository)

eventOwnerRouters.post('/createeventowner', eventOwnerController.createEventOwner)
//
//
eventOwnerRouters.get(`/findeventowner/:id`, function(request, response){
    
    const id = parseInt(request.params.id)
 
   return eventOwnerController.findEventOwner(response, id)
})
//
//
eventOwnerRouters.get('/listalleventowner', eventOwnerController.listAllEventeOwner)
//
//
eventOwnerRouters.put('/updateeventowner/:id', function(request, response){

    const id = parseInt(request.params.id)

    return eventOwnerController.updateEventOwner(request, response, id)
})
//
//
eventOwnerRouters.delete('/deleteeventowner/:id', function(request, response){

    const id = parseInt(request.params.id)

    return eventOwnerController.deleteEventOwner(response, id)
    
})

export default eventOwnerRouters;
