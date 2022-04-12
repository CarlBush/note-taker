const router = require("express").Router();
const { createNewNote, deleteNote, hasNote, getNote, initDb } = require("../../db/lib/database")


//GET | RETRIEVES ALL DATA IN THE "db.json" FILE
router.get("/", (req, res) => {
    res.json(initDb());
});

//GET | RETRIVES ONLY THE SELECTED NOTE BY ID
router.get("/:id", (req, res) => {
    if(!hasNote(req.params.id)) {
        return res.status(400).json({ Message: `No note with the id of ${req.params.id} found`});
    }
    res.json(getNote(req.params.id));
});

//POST | CREATES NEW NOTE
router.post("/", (req, res) => {
    const newNote = createNewNote(req.body);
    console.log(req.body);
    res.json(newNote);
});

//DELETE | REMOVES SELECTED NOTE BY ID
router.delete("/:id", (req, res) => {
    if(!hasNote(req.params.id)) {
        return res.status(400).json({ Message: `No note with the id of ${req.params.id} found`});
    }
    res.json(deleteNote(req.params.id));
});

module.exports = router;