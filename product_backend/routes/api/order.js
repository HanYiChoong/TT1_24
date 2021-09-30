var mongoose = require("mongoose");
var router = require("express").Router();
var uuid = require("uuid");
var Order = mongoose.model("Order");

router.param("id", function (req, res, next, slug) {
    console.log("param");
    console.log(slug);
    Order.findOne({ id: slug })
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
    Order.find().then(function (result) {
        return res.status(200).json(result);
    });
});

router.get("/:id", function (req, res, next) {
    console.log("get id");
    console.log(req.result);

    return res.status(200).json(req.result);
});

router.post("/", function (req, res, next) {
    var items = req.body.items;
    var order = new Order();
    order.id = uuid.v4();
    order.created_at = new Date();
    order.status = "Pending";
    order.items = items;

    order.save();

    return res.status(200).json(req.result);
});

module.exports = router;
