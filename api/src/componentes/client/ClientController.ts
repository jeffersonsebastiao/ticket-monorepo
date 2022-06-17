import { Request, Response } from "express";

export default class ClientController {
    sayHello(request: Request, response: Response) {
        return response.send('say hello')
    }
}