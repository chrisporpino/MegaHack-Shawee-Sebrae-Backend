import express from "express";
import getAllServicesEndpoint from "./endpoints/getAllServicesEndpoint";
import getAllLocationsEndpoint from "./endpoints/getAllLocationsEndpoint";
import loginEndpoint from "./endpoints/loginEndpoint";
import getAllEventsEndpoint from "./endpoints/getAllEventsEndpoint";
import getAllProductsEndpoint from "./endpoints/getAllProductsEndpoint";
import createNewEventEndpoint from "./endpoints/createNewEventEndpoint";

const app = express();
const cors = require('cors')

app.use(express.json()); // Linha mágica (middleware)
app.use(cors())

require('dotenv/config')

app.get('/services', getAllServicesEndpoint)
app.get('/locations', getAllLocationsEndpoint)
app.get('/events', getAllEventsEndpoint)
app.get('/products', getAllProductsEndpoint)
app.post('/events/scheduling', createNewEventEndpoint)

app.post('/login', loginEndpoint)

export default app;