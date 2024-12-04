const express = require("express");
const router = express.Router();

const controller = require("../controllers/postController");
/*const {
    index,
    show,
    store,
    update,
    modify,
    destroy
} = require("../controllers/postController");*/ //metodo destrutturazione in cui si evita di mettere controller. ma solo il nome della funzione
//index
router.get("/", controller.index);//controller.index se uso il primo metodo mentre solo index se uso la destrutturazione

//show
router.get("/:id", controller.show); //controller.show se uso il primo metodo mentre solo index se uso la destrutturazione

//creare una nuova risorsa => post
router.post("/", controller.store); //controller.store se uso il primo metodo mentre solo index se uso la destrutturazione

//cambiare tutta la risorsa => update
router.put("/:id", controller.update); //controller.update se uso il primo metodo mentre solo index se uso la destrutturazione

//cambiare parzialmente una risorsa => modify
router.patch("/:id", controller.modify); //controller.modify se uso il primo metodo mentre solo index se uso la destrutturazione

//cancellazione di una risorsa => destroy
router.delete("/:id", controller.destroy); //controller.destroy se uso il primo metodo mentre solo index se uso la destrutturazione

module.exports = router;
