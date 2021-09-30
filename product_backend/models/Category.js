
var mongoose = require("mongoose");




var CategorySchema = new mongoose.Schema(
    {
        id: Number,
        name: String,
        description: String,
        image:String,

    },
    { timestamps: true }
);




mongoose.model("Category", CategorySchema);
