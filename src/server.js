const express = require('express');
const cors = require('cors')
const migrationsRun = require("./database/sqlite/migrations")
const routes = require("./routes")
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors())
app.use(routes)

migrationsRun(); 

app.listen(PORT, () => console.log(`Server is runing on http://localhost:${PORT}/`))

