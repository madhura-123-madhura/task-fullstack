require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
mongoose.connect(process.env.MONGO_URL)

const app = express()


app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? 'https://task-fullstack-client.vercel.app'
        : 'http://localhost:3000',
    credentials: true
}));
app.use(express.json())

app.use("/api/task", require("./routs/todo.routs.js"))

mongoose.connection.once("open", () => {
    console.log("db running");

    app.listen(process.env.PORT, console.log("server running"))
})

module.exports = app