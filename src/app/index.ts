import * as express from 'express'
import { config } from 'dotenv'
import { Request, Response, Application } from 'express'
config()
const sequelize = require('./db')


const PORT = process.env.PORT || 8080

const app: Application = express()



app.get('/', (req: Request, res: Response) => {
    res.send("hello")
})

const startApp = async () => {
    try {
        console.log(1)
        await sequelize.authenticate()
        
        console.log(2)
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server work on ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

startApp()