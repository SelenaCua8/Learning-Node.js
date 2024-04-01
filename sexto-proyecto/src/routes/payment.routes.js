import { Router} from 'express'
import {createOrder} from '../controllers/payment.controller.js'

const router = Router()

router.get('/create-order', createOrder
)
router.get('/succes', (req, res) => res.send('succes'))

router.get('/webhooks', (req, res) => res.send('webhooks'))

export default router