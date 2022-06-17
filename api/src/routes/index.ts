import { Router } from 'express'
import userRoutes from './client.routes'

const routers = Router()
routers.use('/app', userRoutes)

export default routers