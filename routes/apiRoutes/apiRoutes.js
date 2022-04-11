const router = require("express").Router();
const { createNewNote, deleteNote, hasNote, getNote, initDb } = require("../../db/lib/database")


//GET RETRIEVES ALL DATA IN THE JSON FILE
router.get("/", (req, res) => {
    res.json(initDb());
});

//RETRIVES ONLY THE SELECTED ID
router.get("/:id", (req, res) => {
    if(!hasNote(req.params.id)) {
        return res.status(400).json({ Message: `No notes with the id of ${req.params.id} found`});
    }
    res.json(getNote(req.params.id));
});

//POST
router.post("/", (req, res) => {
    const newNote = createNewNote(req.body);
    console.log(req.body);
    res.json(newNote);
});


//DELETE
router.delete("/:id", (req, res) => {
    if(!hasNote(req.params.id)) {
        return res.status(400).json({ Message: `No notes with the id of ${req.params.id} found`});
    }
    res.json(deleteNote(req.params.id));
});

module.exports = router;