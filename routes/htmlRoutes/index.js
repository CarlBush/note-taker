const path = require("path");
const router = require("express").Router();

//SENDFILE INDEX.HTML TO ROOT OR (http://localhost:3001/ | FOR TESTING)
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"))
});
//SEND FILE NOTES.HTML TO ROOT/NOTES OR  (http://localhost:3001/notes | FOR TESTING)
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"))
});

//IF PAGE DOESN'T EXIST DEFAULT BACK TO INDEX.HTML
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"))
});

module.exports = router;