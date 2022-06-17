import { Router } from 'express'
import ClientController from '../componentes/client/ClientController'

const routers = Router()
const clientControler = new ClientController()

routers.get('/sayhello', function(request, response){
    clientControler.sayHello(request, response)
})

export default routers;