import express from 'express'
import cors from 'cors'
import * as routes from '../routes/index.js'

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', routes.kindRoutes)


export default app