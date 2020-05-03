import { Request, Response } from "express"
import { BaseDatabase } from "../../data/baseDatabase"
import {v4} from "uuid";

export default async function createNewEventEndpoint(req: Request, res: Response) {
    try {
        const db = new BaseDatabase()
        const durationService = await db.getServiceById(req.body.serviceId as string)

        const serviceEndTime = Number(req.body.startTime) + durationService
        
        const event = {
            id: v4(),
            startTime: req.body.startTime,
            endTime: serviceEndTime,
            observation: req.body.observation,
            costumerId: req.body.costumerId,
            serviceId: req.body.serviceId,
            localId:req.body.localId
        }

        await db.createNewEvent(event)

        res.send(
            { message: "Agendado com sucesso!", event }
        )

    } catch (err) {
        res.send({ message: err.message })
    }

}