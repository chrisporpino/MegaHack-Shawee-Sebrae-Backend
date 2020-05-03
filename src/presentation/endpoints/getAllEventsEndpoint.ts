import { Request, Response } from "express"
import { BaseDatabase } from "../../data/baseDatabase"

export default async function getAllEventsEndpoint(req: Request, res: Response) {
    try {
        const db = new BaseDatabase()
        const services = await db.getAllServices()
        const locations = await db.getAllLocations()
        const events = await db.getAllEvents()

        const result: any = events.map((event: any) => ({
            id: event.id,
            startTime: event.startTime,
            endTime: event.endTime,
            observation: event.observation,
            costumerId: event.costumerId,
            location: locations.find((location: any) => location.id === event.localId),
            service: services.find((service: any) => service.id === event.serviceId)
        }))

        res.send(
            { events: result }
        )

    } catch (err) {
        res.send({ message: err.message })
    }

}