import express from "express";
import getAllServicesEndpoint from "./endpoints/getAllServicesEndpoint";
import getAllLocationsEndpoint from "./endpoints/getAllLocationsEndpoint";

const app = express();
const cors = require('cors')

app.use(express.json()); // Linha mágica (middleware)
app.use(cors())

require('dotenv/config')

app.get('/services', getAllServicesEndpoint)
app.get('/locations', getAllLocationsEndpoint)

export default app;
