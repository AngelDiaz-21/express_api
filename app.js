// Usando objeto express
const express = require('express')
// App de express
const app = express()
app.use(express.json()) //Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app "localhost:3000"
const port = 3000

// HTTP METHODS
// GET
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL request ${new Date()}`)
    const explorer1 = {id: 1, name: "Angel 1"}
    const explorer2 = {id: 1, name: "Angel 2"}
    const explorer3 = {id: 1, name: "Angel 3"}
    const explorer4 = {id: 1, name: "Angel 4"}

    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

// GET
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)

    const explorer = {id: 1, name: "Angel"}
    res.status(200).json(explorer)
})

// POST
app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`)

    const requestBody = req.body // Parámetros de un cliente
    res.status(201).json({message: "Created"})
})

// PUT
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)

    const requestBody = req.body //Parámetros de un cliente
    res.status(200).json({message: "Updated"})
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})