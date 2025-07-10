import express from "express";
import {
  createNotes,
  deleteAllNotes,
  getAllNotes,
  updateNotes,
  getNoteById
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNotes);

router.put("/:id", updateNotes);

router.delete("/:id", deleteAllNotes);

export default router;
