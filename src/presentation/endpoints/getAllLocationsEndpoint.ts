import { Request, Response } from "express"
import { BaseDatabase } from "../../data/baseDatabase"

export default async function getAllLocationsEndpoint(req: Request, res: Response) {
    try {
        const db = new BaseDatabase()
        const locations = await db.getAllLocations()
        res.send(
            { locations }
        )
    } catch (err) {
       res.send({ message: err.message })
    }

}