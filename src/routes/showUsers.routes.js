const Router = require('express')

const showUsersRoute = Router()

const usersController = require('../controllers/UsersController')

const showUsers = new usersController()

showUsersRoute.get("/", async (req,res) =>{
    const results = await showUsers.show()
    res.json(results)
})

module.exports = showUsersRoute