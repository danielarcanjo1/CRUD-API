const sqliteConnection = require('../database/sqlite')
const {hash} = require('bcrypt')
class UsersController{
    
    async show(){
        const database = await sqliteConnection()
        const results = await database.all("SELECT * FROM users")
        return results
       
    }

    async create(req,res){
        const { name, email, password, avatar} = req.body
        res.status(201).json({name,email,password,avatar})
        const database = await sqliteConnection()
        const hashedPassword = await hash(password, 8)
        await database.run("INSERT INTO users (name, email, password, avatar) VALUES (?, ?, ?, ?)", [name, email, hashedPassword,avatar])
    }

    update(){
        
    }

    delete(){

    }

}

module.exports = UsersController