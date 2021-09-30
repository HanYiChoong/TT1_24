var mongoose = require("mongoose");

var CartSchema = new mongoose.Schema(
    {
        id: String,
        customer_id: String,
        items: Array,
        
    },
    { timestamps: true }
);

mongoose.model("Cart", CartSchema);
