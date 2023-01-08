import express from 'express'
import { createFlip, createMulti, getFlipCategs, getMultiCategs, getRandomFlipCard } from '../controllers/cards.js'
const router = express.Router()

router.post("/multi", createMulti)
router.post("/flip", createFlip)
router.get("/flipCategs", getFlipCategs)
router.get("/multiCategs", getMultiCategs)
router.get("/flip/:categ/:createdBy", getRandomFlipCard)

export default router