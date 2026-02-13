const { gettodo, createtodo, updatetodo, deletetodo } = require("../controller/todo.controller.js")

const router = require("express").Router()



router
    .get("/", gettodo)
    .post("/create", createtodo)
    .patch("/modify/:ID", updatetodo)
    .delete("/remove/:ID", deletetodo)

module.exports = router