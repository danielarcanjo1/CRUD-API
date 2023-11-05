const Router = require("express")

const usersRouter = require('./user.routes')
const showUsersRoute = require("./showUsers.routes")
const mainRoute = require("./main.routes")
const routes = Router()

routes.use("/",mainRoute)
routes.use("/users", usersRouter)
routes.use("/show",showUsersRoute)
module.exports = routes