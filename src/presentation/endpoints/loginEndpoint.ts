import { Request, Response } from "express"
import { BaseDatabase } from "../../data/baseDatabase"
import * as jwt from 'jsonwebtoken'

export default async function loginEndpoint(req: Request, res: Response) {
    try {
        const db = new BaseDatabase()
        const user = await db.getUserByEmail(req.body.email)
        const jwtKey = process.env.JWT_KEY as string
        const userData = jwt.verify(user.password, jwtKey) as { password: string }

        if (userData.password === req.body.password) {
            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                    role: user.role
                },
                jwtKey,
                { expiresIn: '12h' }
            )

            res.send({
                message: "Usuário logado",
                token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    address: user.address,
                    role: user.role
                }
            })
        } else {
            res.send({
                message: "Email ou senha incorretos"
            })
        }

    } catch (err) {
        res.send({ message: err.message })
    }

}