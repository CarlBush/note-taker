const express = require("express");
const htmlRouters = require("./routes/htmlRoutes/index");
const apiRoutes = require("./routes/apiRoutes/apiRoutes");

const app = express();
const PORT = process.env.PORT || 3001;


//MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/notes", apiRoutes);
app.use("/", htmlRouters);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));