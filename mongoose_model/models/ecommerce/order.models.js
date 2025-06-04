import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
        productId :{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        quantity:{
            type: Number,
            required: true
        }
})

const orderSchema = new mongoose.Schema({
    orderprice:{
        type: Number,
        required : true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref : User
    },
    orderItems:{
        type: []
    },
    address:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum : ["PENDING", "CANCELLED", "DELIVERED"],
        default : "PENDING"
    }
})

export const Order = mongoose.model("Order", orderSchema)