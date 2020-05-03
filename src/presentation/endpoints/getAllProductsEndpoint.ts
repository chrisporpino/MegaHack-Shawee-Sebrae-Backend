import { Request, Response } from "express"
import { BaseDatabase } from "../../data/baseDatabase"

export default async function getAllProductsEndpoint(req: Request, res: Response) {
    try {
        const db = new BaseDatabase()
        const products = await db.getAllProducts()
        res.send(
            { products }
        )
    } catch (err) {
       res.send({ message: err.message })
    }

}