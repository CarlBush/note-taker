const express = require("express");
const htmlRouters = require("./routes/htmlRoutes");
//const apiRoutes = require("./routes/apiRoutes");

const app = express();
const PORT = process.env.PORT || 3001;


//MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//app.use("/api", apiRoutes);
app.use("/", htmlRouters);


app.listen(PORT, () => console.log(`Server stared on port ${PORT}`));
//  app.listen(3001, () => {
//      console.log(`API server now on port ${PORT}!`);
//    });
