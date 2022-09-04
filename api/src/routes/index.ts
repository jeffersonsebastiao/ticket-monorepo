import { Router } from 'express'
import eventOwnerRoutes from './event-owner.routes'
import eventRoutes from './event.routes'


const router = Router()

router.use('/event-owner', eventOwnerRoutes)
router.use('/event', eventRoutes)

export default router