const Router = require("express")

const mainRoute = Router()

mainRoute.get('/', (req,res) =>{
    res.send('Bem vindo')
})

module.exports = mainRoute