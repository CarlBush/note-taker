const fs = require("fs/promises");
const path = require("path");
const db = require("../db.json");
const uuid = require("uuid");

//FUNCTION TO ENSURE 'db.json" IS SETUP AS AN ARRAY"note: []"
function initDb() {
    if(!db || !db.note || !Array.isArray(db.note)) {
        db = {note: []}
    };
    return db;
};

//CHECK TO SEE IF NOTE IS IN DATABASE
function hasNote(id) {
    initDb();
    return db.note.some(data => data.id == id);
};

//FUNCTION TO FETCH A SINGLE ID
function getNote(id) {
    initDb();
    if(!hasNote(id)) {
        return null;
    };
    return db.note.find(data => data.id == id);
};

//FUNCTION TO CREATE NEW UNIQUE ID AND PUSH INTO ARRAY
function createNewNote(note) {
    initDb();
    //req.body.id = db.length.toString();
    note.id = uuid.v4();
    db.note.push(note);
    writeDb();
    return note;
};

//FUNCTION TO REMOVE SELECTED ID FROM THE ARRAY
function deleteNote(id) {
    initDb();
    db.note = db.note.filter(data => data.id !== id);
    writeDb();
    return db;
};

//FUNCTION TO WRITE THE DATA INTO "db.json"
function writeDb() {
    initDb();
    fs.writeFile(
        path.join(__dirname, "../db.json"),
        JSON.stringify(db, null, 2)
    );
};


module.exports = { createNewNote, deleteNote, hasNote, getNote, initDb };