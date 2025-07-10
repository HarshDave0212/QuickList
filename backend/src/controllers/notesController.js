import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({createdAt:-1}); //-1 means newest at the first 
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({
      message: "Internal server issue",
    });
  }
}

export async function getNoteById(req, res) {
  try {
    const fetchNote = await Note.findById(req.params.id);
    if (!fetchNote)
      return res.status(404).json({
        message: "Note not found",
      });
    res.json(fetchNote);
  } catch (error) {
    console.error("Error in getNote controller", error);
    res.status(500).json({
      message: "Internal server issue",
    });
  }
}

export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNode controller", error);
    res.status(500).json({
      message: "Internal server issue",
    });
  }
}

export async function updateNotes(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedNote)
      return res.status(404).json({
        message: "Note not found",
      });
    res.status(201).json({
      message: "Note Updated successfully!",
    });
  } catch (error) {
    console.error("Error in updateNote controller", error);
    res.status(500).json({
      message: "Internal server issue",
    });
  }
}

export async function deleteAllNotes(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({
        message: "Note not found",
      });
    res.status(200).json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({
      message: "Internal server issue",
    });
  }
}
