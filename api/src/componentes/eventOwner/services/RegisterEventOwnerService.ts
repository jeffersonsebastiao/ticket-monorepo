import { EventOwnerRepository } from "../EventOwnerRepository";
import { validateBr } from 'js-brasil';
import { hash as hashGenerator } from "argon2";
import { EmailService } from "../../../services/mail/EmailService";
import { randomUUID } from "crypto";

export interface ICreateEventOwnerDTO {
    name: string;
    email: string;
    cpfCpnj: string;
    password: string;
    phone: number;
    pseudonym: string;
    confirmPassword: string;
}

export class RegisterEventOwnerService {
    constructor(
        private readonly eventOwnerRepository: EventOwnerRepository,
        private readonly emailService: EmailService
    ) { }

    async handle({ name, email, cpfCpnj, phone, pseudonym, password, confirmPassword }: ICreateEventOwnerDTO) {
        if (!name || !email || !cpfCpnj || !phone || !pseudonym || !password) {
            throw new Error('Missing required information')
        }

        if (await this.eventOwnerRepository.compareEventOwner(email)) {
            throw new Error('User already exists')
        }

        if (!validateBr.cnpj(`${cpfCpnj}`)) {
            throw new Error('Invalid cnpj')
        }

        if (confirmPassword != password) {
            throw new Error('Different passwords')
        }

        const encriptedPassword = await hashGenerator(password)
        const hash = randomUUID()
        const expiredate = new Date(Date.now() + 30000 * 100)

        await this.eventOwnerRepository.createEventOwner({
            name,
            email,
            cpfCpnj,
            password: encriptedPassword,
            phone,
            pseudonym,
            confirmPassword,
            hash,
            expiredate
        })

        await this.emailService.sendEmail(email, 'olha que bacana', `Codigo de confirmaçao: ${hash}`)
    }
}