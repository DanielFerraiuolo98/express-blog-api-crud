const post = require("../modules/post.js");

//index
function index(req, res) {
    const postName = req.query.name;
    const itemIngredient = req.query.ingredient;
    console.log(postName);
    console.log(itemIngredient);
    let response = {
        totalCount: post.length,
        data: [...post],
    };
    let postCopy = [...post];
    if (postName) {
        postCopy = post.filter((item) => { //prima si filtra sul post originale
            item.name.includes(postName);
        });
    }
    if (itemIngredient) {
        postCopy = postCopy.filter((item) => { //dopo si filtra sul post copiato che è il il risultato del filtro del post originale
            item.ingredient.includes(itemIngredient);
        });
    }
    res.json(response);
}

//show
function show(req, res) {
    const id = parseInt(req.params.id);
    const item = post.find((item) => item.id === id);//prelevo il post dall'array
    if (item) {
        res.json({
            success: true,
            item,
        });
    }
    else {
        res.status(404);
        res.json({
            success: false,
            message: "il post non è stato trovato",
        });
    }
    res.json(response);
}

//create
function store(req, res) {
    res.send("creazione nuovo post con id" + req.params.id);
}

//update
function update(req, res) {
    res.send("modifica integrale del post con id" + req.params.id);
}

//modify
function modify(req, res) {
    res.send("modifica parziale del post con id" + req.params.id);
}

//destroy
function destroy(req, res) {
    res.send("cancellazione del post con id" + req.params.id);
    const id = parseInt(req.params.id);
    const index = post.findIndex(item => item.id === id);//cerca tutti gli id e quando sarà uguale all'id di req.params.id eseguirà poi lo splice
    if (index !== -1) {
        post.splice(index, 1); //splice elimina un elemento dell'array in base all'indice e 1 rappresenta che va eliminato un elemento
        res.sendStatus(204);
    }
    else {
        res.status(404);
        res.json({
            error: "404",
            message: "post non trovato",
        });
    }
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
}