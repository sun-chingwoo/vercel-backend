import express from "express"
import { createNote, deleteNote, getAllNotes } from "../controllers/notesController.js"

const route=express.Router()

route.get("/",getAllNotes);

route.post("/create",createNote);

route.delete("/:id",deleteNote);

export default route;