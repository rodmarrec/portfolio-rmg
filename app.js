// STUB External modules
const express = require("express");

// STUB instanced modules
app = express();

// STUB configuration
const PORT = 3000
app.set("view engine", "ejs");

// STUB middleware
app.use(express.static("public"));

// STUB routes
app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/about", (req, res) => {
    res.render("about.ejs")
})

// STUB server listener
app.listen(PORT, () => {
    console.log(`Listening for client request on ${PORT}`);
})