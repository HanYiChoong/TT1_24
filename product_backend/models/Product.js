var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema(
    {
        id: Number,
        title: String,
        description: String,
        category_id: String,
        image: String,
        qty: Number,
    },
    { timestamps: true }
);

mongoose.model("Product", ProductSchema);
