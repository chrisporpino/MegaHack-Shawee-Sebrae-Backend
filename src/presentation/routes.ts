import express from "express";
import getAllServicesEndpoint from "./endpoints/getAllServicesEndpoint";

const app = express();
const cors = require('cors')

app.use(express.json()); // Linha mágica (middleware)
app.use(cors())

require('dotenv/config')

app.get('/services', getAllServicesEndpoint)

export default app;
