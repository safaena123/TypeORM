import 'reflect-metadata';
import express from 'express';
import {createConnection} from 'typeorm'

import userRoutes from './routes/product.routes'

const app = express();
createConnection();
// Middlewares

app.use(express.json());


// routes
app.use(userRoutes);

var port = 1234;
app.listen(port, () => {    
	console.log('Server is up and running on port number ' + port);});
