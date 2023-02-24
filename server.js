const express = require("express")
const app = express()
const port = 3000
const { check, validationResult } = require("express-validator");

app.use(express.json());

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})