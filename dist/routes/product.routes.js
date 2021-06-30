"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var product_controller_1 = require("../controllers/product.controller");
//Afficher liste des produits avec GET
router.get('/list', product_controller_1.product_list);
//Creer un produit avec POST
router.post('/list/create', product_controller_1.product_create);
//Lire un produit par son id
router.get('/list/:id', product_controller_1.product_details);
//Modifier un produit
router.put('/list/:id', product_controller_1.product_update);
//Supprimer un produit
router.delete('/list/:id', product_controller_1.product_delete);
exports.default = router;
