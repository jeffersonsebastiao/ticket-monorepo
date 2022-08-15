import { EventOwnerRepository } from "../EventOwnerRepository";
import { verify } from "argon2";
import { sign } from 'jsonwebtoken'

export class LoginService {

    constructor(private readonly eventOwnerRepository: EventOwnerRepository) { }

    async handle(email: string, senha: string) {
        if (!email || !senha) {
            throw new Error('Digite um email e senha validos!')
        }

        const loginByEmail = await this.eventOwnerRepository.loginByEmail(email)

        if (!loginByEmail) {
            throw new Error('Email invalido!');
        }

        if (!(await verify(loginByEmail.password, senha))) {
            throw new Error('Senha Invalida')
        }

        const tokenPayLoad = {
            id: loginByEmail.id
        }

        const keyJwt = sign(tokenPayLoad, 'key')

        return keyJwt
    }
}