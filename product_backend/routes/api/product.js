var mongoose = require("mongoose");
var router = require("express").Router();

var Product = mongoose.model("Product");
var Category = mongoose.model("Category");

router.param("id", function (req, res, next, slug) {
    console.log("param");
    console.log(slug);
    Product.findOne({ id: slug })
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
    Product.find().then(function (product) {
        return res.status(200).json(product);
    });
});

router.get("/:id", function (req, res, next) {
    console.log("get id");
    console.log(req.result);

    return res.status(200).json(req.result);
});

module.exports = router;
