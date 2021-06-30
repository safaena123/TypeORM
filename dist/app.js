"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
//import morgan from 'morgan';
//import cors from 'cors'
var typeorm_1 = require("typeorm");
var product_routes_1 = __importDefault(require("./routes/product.routes"));
var app = express_1.default();
typeorm_1.createConnection();
// Middlewares
//app.use(cors());
app.use(express_1.default.json());
//app.use(morgan('dev'));
// routes
app.use(product_routes_1.default);
var port = 1234;
app.listen(port, function () {
    console.log('Server is up and running on port number ' + port);
});
