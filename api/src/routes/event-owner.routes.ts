import { Router } from 'express'
import { EventOwnerController } from "../componentes/eventOwner/EventOwnerController"
import { EventOwnerRepository } from "../componentes/eventOwner/EventOwnerRepository"
import { RegisterEventOwnerService } from '../componentes/eventOwner/services/RegisterEventOwnerService'
import { ValidateEventOwnerService } from '../componentes/eventOwner/services/ValidateEventOwnerService'
import { EmailService } from '../services/mail/EmailService'

const eventOwnerRouters = Router()

const eventOwnerRepository = new EventOwnerRepository()
const emailService = new EmailService()
const validateEventOwner = new ValidateEventOwnerService(eventOwnerRepository, emailService)
const registerEventOwnerService = new RegisterEventOwnerService(eventOwnerRepository, emailService)
const eventOwnerController = new EventOwnerController(eventOwnerRepository, registerEventOwnerService, validateEventOwner)

eventOwnerRouters
    .get('/', eventOwnerController.listAllEventeOwner)
    .get(`/:id`, eventOwnerController.findEventOwner)
    .post('/', eventOwnerController.createEventOwner)
    .put('/:id', eventOwnerController.updateEventOwner)
    .delete('/:id', eventOwnerController.deleteEventOwner)
    .post('/validation/:hash', eventOwnerController.validateEventOwner)

export default eventOwnerRouters;
