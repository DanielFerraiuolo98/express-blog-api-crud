function checkTime(req, res, next) {
    const currentTime = new Date().toLocaleString();
    console.log("ciao, sei passato dal middleware in questo alle");
    console.log(currentTime);
    if (currentTime.includes("12.00")) {
        res.status(503).send("siamo chiusi");
        return;
    }
    next();
}

module.exports = checkTime;