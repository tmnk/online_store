import * as express from 'express'
import { config } from 'dotenv'
import { Request, Response, Application } from 'express'

config()

const PORT = process.env.PORT || 8080

const app: Application = express()

app.listen(PORT, () => console.log(`Server work on ${PORT}`))