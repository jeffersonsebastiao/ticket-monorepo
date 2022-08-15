import { Router } from 'express'
import { EventOwnerController } from "../componentes/eventOwner/EventOwnerController"
import { EventOwnerRepository } from "../componentes/eventOwner/EventOwnerRepository"
import { LoginService } from '../componentes/eventOwner/services/LoginService'
import { RegisterEventOwnerService } from '../componentes/eventOwner/services/RegisterEventOwnerService'
import { ValidateEventOwnerService } from '../componentes/eventOwner/services/ValidateEventOwnerService'
import { EmailService } from '../services/mail/EmailService'

const eventOwnerRouters = Router()

const eventOwnerRepository = new EventOwnerRepository()
const emailService = new EmailService()
const validateEventOwner = new ValidateEventOwnerService(eventOwnerRepository, emailService)
const loginService = new LoginService(eventOwnerRepository)
const registerEventOwnerService = new RegisterEventOwnerService(eventOwnerRepository, emailService)
const eventOwnerController = new EventOwnerController(eventOwnerRepository, registerEventOwnerService, validateEventOwner, loginService)

eventOwnerRouters
    .get('/', eventOwnerController.listAllEventeOwner)
    .get(`/:id`, eventOwnerController.findEventOwner)
    .post('/', eventOwnerController.createEventOwner)
    .put('/:id', eventOwnerController.updateEventOwner)
    .delete('/:id', eventOwnerController.deleteEventOwner)
    .post('/validation/:hash', eventOwnerController.validateEventOwner)
    .post('/login', eventOwnerController.loginEventOwner)


export default eventOwnerRouters;
