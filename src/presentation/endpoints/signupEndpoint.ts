import { Request, Response } from "express"
import { BaseDatabase } from "../../data/baseDatabase"
import * as jwt from 'jsonwebtoken';
import { v4 } from 'uuid';

export default async function signupEndpoint(req: Request, res: Response) {
    try {
        const db = new BaseDatabase()
        const jwtKey = process.env.JWT_KEY as string
        const hashPassword = jwt.sign(
            { password: req.body.password },
            jwtKey,
            { expiresIn: '1000000h' }
        )

        const user = {
            id: v4(),
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
            address: req.body.address
        }

        await db.signUp(user)
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: 'COSTUMER'
            },
            jwtKey,
            { expiresIn: '12h' }
        )

        res.send({
            message: "Usuário criado e logado",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                address: user.address,
                role: 'COSTUMER'
            }
        })


    } catch (err) {
        res.send({ message: err.message })
    }

}