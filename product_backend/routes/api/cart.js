var mongoose = require("mongoose");
var router = require("express").Router();
var uuid = require("uuid");
var Cart = mongoose.model("Cart");

router.param("id", function (req, res, next, slug) {
    console.log("param");
    console.log(slug);
    Cart.findOne({ id: slug })
        .then(function (result) {
            if (!result) {
                return res.sendStatus(404);
            }
            console.log(result);
            req.result = result;
            return next();
        })
        .catch(next);
});

router.get("/", function (req, res, next) {
    Cart.find().then(function (result) {
        return res.status(200).json(result);
    });
});

router.get("/:id", function (req, res, next) {
    console.log("get id");
    console.log(req.result);

    return res.status(200).json(req.result);
});

// add or update
router.post("/", function (req, res, next) {
    var items = req.body.items;
    var cart = new Cart();
    cart.id = uuid.v4();
    cart.created_at = new Date();
    cart.status = "Pending";
    cart.items = items;

    cart.save();

    return res.status(200).json(req.result);
});

module.exports = router;
