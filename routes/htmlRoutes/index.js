const path = require("path");
const router = require("express").Router();

//GET | SENDFILE "index.html" TO ROOT "/"
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"))
});
//GET | SEND FILE "notes.html" TO PATH "/NOTES"
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"))
});

//GET | SENDFILE "index.html" IF PATH IS INCORRECT
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"))
});

module.exports = router;