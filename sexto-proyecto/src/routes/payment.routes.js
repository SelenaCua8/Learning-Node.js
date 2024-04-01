import { Router} from 'express'

const router = Router()

router.get('/create-order', (req, res) => 
    res.send('creating order')
)
router.get('/succers', (req, res) => res.send('succers'))

router.get('/webhooks', (req, res) => res.send('webhooks'))

export default router