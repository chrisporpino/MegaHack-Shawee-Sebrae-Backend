import { Request, Response } from "express"
import { BaseDatabase } from "../../data/baseDatabase"

export default async function getAllServicesEndpoint(req: Request, res: Response) {
    try {
        const db = new BaseDatabase()
        const services = await db.getAllServices()
        res.send(
            { services }
        )
    } catch (err) {
       res.send({ message: err.message })
    }

}