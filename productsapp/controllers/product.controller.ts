import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from "../models/product";

export const product_list =  async (req: Request, res: Response): Promise<Response> => {
    const products =  await getRepository(Product).find();
    return res.json(products);
}

export const product_create = async (req: Request, res: Response): Promise<void> => {
    const newProduct = getRepository(Product).create(req.body);
    const result =  await getRepository(Product).save(newProduct).catch(err=> console.log(err));
    res.send('Product Created successfully');
}

export const product_details = async(req: Request, res: Response): Promise<Response> => {
    const product = await getRepository(Product).findOne(req.params.id).catch(err=> console.log(err));
    if (product) return res.json(product);
    return res.status(404).json("No such product with this ID")
}

export const product_update = async(req: Request, res: Response): Promise<Response> => {
    const product = await getRepository(Product).findOne(req.params.id).catch(err => console.log(err));
    if (product) {
        getRepository(Product).update(product, req.body);
        const resultat = await getRepository(Product).save(product).catch(err=> console.log("**"+err));
        return res.json("Product udpated.");
    }
    return res.status(404).json("No such product with this ID")
}

export const product_delete = async(req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Product).delete(req.params.id).catch(err=> console.log("**"+err));
    if(results) return res.json("Deleted successfully!");
    return res.status(404).json("No such product with this ID to delete");
}
