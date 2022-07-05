import { Router } from 'express'
import eventOwnerRoutes from './event-owner.routes'

const routers = Router()

routers.use('/event-owner', eventOwnerRoutes)

export default routers