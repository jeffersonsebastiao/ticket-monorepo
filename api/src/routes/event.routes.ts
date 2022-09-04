import { Router } from "express";
import { EventController } from "../componentes/event/EventController";
import { EventRepository } from "../componentes/event/EventRepository";
import { CreateEventService } from "../componentes/event/services/CreateEventService";
import { isAuthMiddleware } from "../middlewares/isAuthMiddleware";

const eventRoutes = Router()
const eventRepository = new EventRepository()
const createEventService = new CreateEventService(eventRepository)
const eventController = new EventController(createEventService)

eventRoutes.use(isAuthMiddleware)

eventRoutes
    .post('/', eventController.createEvent)

export default eventRoutes