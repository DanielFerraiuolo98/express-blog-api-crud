function errorTerminale(err, req, res, next) {
    res.status(500);
    res.json({ error: "Internal server error", message: "Riprova più tardi" });
};

module.exports = errorTerminale;