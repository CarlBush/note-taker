const fs = require("fs/promises");
const path = require("path");

function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFile(path.join(__dirname, "../db.json"),
    JSON.stringify({ note: noteArray}, null, 2)
    );
};

module.exports = { createNewNote };