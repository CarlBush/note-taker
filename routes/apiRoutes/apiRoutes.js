const path = require("path");
const router = require("express").Router();
const db = require("../../db/db.json");

//RETRIEVES ALL DATA IN THE JSON FILE
router.get("/", (req, res) => {
    res.json(db);
});

//RETRIVES ONLY THE SELECTED ID
router.get("/:id", (req, res) => {
    const found = db.some(data => data.id == req.params.id);

    if(found){
        res.json(db.filter(data=> data.id == req.params.id));
    } else {
        res.status(400).json({ Message: `No notes with the id of ${req.params.id} found`})
    };
});


module.exports = router;