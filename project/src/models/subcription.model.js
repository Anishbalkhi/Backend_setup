import mongoose from "mongoose";

const subcripationSchema  =  new mongoose.Schema({
Subscriber : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
},
channel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
}
},
{
    timestamps: true
})

export const Subcripation =  mongoose.model("Subcripation", subcripationSchema)