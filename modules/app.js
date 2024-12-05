const express = require("express");
const app = express();
app.use(express.json());// il body di qualunque richiesta va parsato come application json
app.use(express.static("public"));

const postRouter = require("../routers/posts");

app.get("/", (req, res) => {
    res.send("<h1> Server del mio blog </h1>");
});

app.use("/posts", postRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

/*
MVC = Model View Controller

Routing
*/