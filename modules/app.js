const express = require("express");
const app = express();
//const checkTime = require("../middlewares/checkTime.js");
const errorTerminale = require("../middlewares/errorTerminale.js");
const errorEndpoint = require("../middlewares/errorEndpoint.js");


app.use(express.json());// il body di qualunque richiesta va parsato come application json
//app.use(checkTime); è usato a livello globale

//app.use("/posts", checkTime);

app.use(express.static("public"));

const postRouter = require("../routers/posts");

app.get("/", (req, res) => {
    //throw new Error("BROKEN"); errore forzato da me
    res.send("<h1> Server del mio blog </h1>");
});

app.use("/posts", postRouter);

app.use(errorTerminale);

app.use(errorEndpoint);// gestisce gli errori 404

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

/*
MVC = Model View Controller

Routing
*/