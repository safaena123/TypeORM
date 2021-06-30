import {Router} from 'express';

const router = Router();
import{product_list, product_create, product_update, product_delete, product_details} from '../controllers/product.controller';

//Afficher liste des produits avec GET
router.get('/products', product_list);

//Creer un produit avec POST
router.post('/products/create', product_create);

//Lire un produit par son id
router.get('/products/:id', product_details);

//Modifier un produit
router.put('/products/:id/update', product_update);

//Supprimer un produit
router.delete('/products/:id/delete', product_delete);

export default router ;
