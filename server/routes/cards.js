import express from "express";
import {
  createFlip,
  createMulti,
  deleteFlip,
  deleteMulti,
  getFlipCards,
  getFlipCategs,
  getMultiCards,
  getMultiCategs,
  getRandomFlipCard,
  getRandomMultiCards,
} from "../controllers/cards.js";
const router = express.Router();

router.post("/multi", createMulti);
router.post("/flip", createFlip);
router.get("/flipCategs/:createdBy", getFlipCategs);
router.get("/multiCategs/:createdBy", getMultiCategs);
router.get("/flip/:categ/:createdBy", getRandomFlipCard);
router.get("/multi/:categ/:createdBy/:limit", getRandomMultiCards);
router.get("/multi/:createdBy", getMultiCards);
router.get("/flip/:createdBy", getFlipCards);
router.delete("/multi/:id", deleteMulti);
router.delete("/flip/:id", deleteFlip);

export default router;
