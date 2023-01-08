import express from 'express'
import { createFlip, createMulti, getFlipCategs, getMultiCategs, getRandomFlipCard, getRandomMultiCards } from '../controllers/cards.js'
const router = express.Router()

router.post("/multi", createMulti)
router.post("/flip", createFlip)
router.get("/flipCategs/:createdBy", getFlipCategs)
router.get("/multiCategs/:createdBy", getMultiCategs)
router.get("/flip/:categ/:createdBy", getRandomFlipCard)
router.get("/multi/:categ/:createdBy/:limit", getRandomMultiCards)

export default router