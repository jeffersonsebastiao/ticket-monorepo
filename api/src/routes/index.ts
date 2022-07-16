import { Router } from 'express'
import eventOwnerRoutes from './event-owner.routes'

const router = Router()

router.use('/event-owner', eventOwnerRoutes)

export default router