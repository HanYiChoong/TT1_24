var mongoose = require("mongoose");




var OrderSchema = new mongoose.Schema(
    {
        id: String,
        customer_id: String,
        status: String,
        items: Array,
        created_at: Date,
        
    },
    { timestamps: true }
);




mongoose.model("Order", OrderSchema);