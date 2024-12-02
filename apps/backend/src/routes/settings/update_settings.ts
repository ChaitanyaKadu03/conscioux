import express from "express"

const Router = express.Router()

Router.get('/', (req, res) => {
    res.send("WORKING...")
})

export default Router