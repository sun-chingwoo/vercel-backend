import Note from "../models/Note.js";

export const getAllNotes = async (_,res)=>{
    try {
        const notes= await Note.find().sort({ createdAt: -1});
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({message:"cant fetch in getall"})
    }
};

export const createNote = async (req,res)=>{
    try {
        const {title,content} = req.body
        const newnote= Note({title,content});
        await newnote.save();
        res.status(201).json({message:"created new"})
    } catch (error) {
        res.status(500).json({message:"coundnt create new"})
    }
};

export const deleteNote = async (req,res)=>{
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"deleted sucessfully"})
    } catch (error) {
        res.status(500).json({message:"coundnt delele"})
    }
};