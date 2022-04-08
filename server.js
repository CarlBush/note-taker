const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));

const PORT = process.env.PORT || 3001;

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });