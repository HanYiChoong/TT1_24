var mongoose = require("mongoose");




var OrderSchema = new mongoose.Schema(
    {
        id: String,
        customer_id: String,
        status: String,
        created_at: timestamps,
        
    },
    { timestamps: true }
);




mongoose.model("Order", OrderSchema);