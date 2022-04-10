const fs = require("fs/promises");

function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"),
    JSON.stringify({ note: noteArray}, null, 2)
    );
};

module.exports = { createNewNote };