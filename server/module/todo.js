const mongoose = require("mongoose")

module.exports = mongoose.model("todo", new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    publish: { type: Boolean, default: true },

}, { timestamps: true }))