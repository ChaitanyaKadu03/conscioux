import express from "express"

const Router = express.Router()

Router.get('/', (req, res) => {

    // Use switch...
    res.send("WORKING...")
})

export default Router