import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


export function isAuthMiddleware(request: Request, response: Response, next: NextFunction) {

    const token = request.headers['authorization']

    try {

        if (!token) {
            throw new Error('error, invalid token')
        }
        const decodedID = verify(token, 'key') as { id: number }

        request.context = {
            user: decodedID
        }

        return next()

    } catch (error) {

        if (error instanceof Error) {
            return response.status(401).json(error.message)
        }

    }

}


