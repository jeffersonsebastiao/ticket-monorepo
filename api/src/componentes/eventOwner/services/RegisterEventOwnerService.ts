import { EventOwnerRepository } from "../EventOwnerRepository";
import { ICreateEventOwnerDTO } from "../ICreateEventOwner.dto";
import { validateBr } from 'js-brasil';

export class RegisterEventOwnerService {
    constructor(private readonly eventOwnerRepository: EventOwnerRepository) { }

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

        await this.eventOwnerRepository.createEventOwner({
            name,
            email,
            cpfCpnj,
            password,
            phone,
            pseudonym,
            confirmPassword
        })
    }
}