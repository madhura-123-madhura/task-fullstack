const todo = require("../module/todo.js")

exports.createtodo = async (req, res) => {
    try {
        await todo.create(req.body)
        res.status(201).json({ message: "todo create success", success: true })
    } catch (error) {
        res.status(500).json({ message: "todo create fail" })
    }
}
exports.gettodo = async (req, res) => {
    try {
        const result = await todo.find()
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({ message: "todo get fail" })
    }
}
exports.updatetodo = async (req, res) => {
    try {
        const { ID } = req.params
        const result = await todo.findByIdAndUpdate(ID, req.body)
        res.status(201).json({ message: "todo update success", result })
    } catch (error) {
        res.status(500).json({ message: "todo update fail" })
    }
}
exports.deletetodo = async (req, res) => {
    try {
        const { ID } = req.params
        const result = await todo.findByIdAndDelete(ID)
        res.status(201).json({ message: "todo delete success", result })
    } catch (error) {
        res.status(500).json({ message: "todo delete fail" })
    }
}