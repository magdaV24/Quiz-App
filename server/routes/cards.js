import express from 'express'
import { createFlip, createMulti } from '../controllers/cards.js'
const router = express.Router()

router.post("/multi", createMulti)
router.post("/flip", createFlip)

export default router