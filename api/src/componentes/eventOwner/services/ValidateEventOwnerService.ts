import { EmailService } from "../../../services/mail/EmailService"
import { EventOwnerRepository } from "../EventOwnerRepository"

export class ValidateEventOwnerService {

    constructor(
        private readonly eventOwnerRepository: EventOwnerRepository,
        private readonly emailService: EmailService
    ) { }

    async handle(hash: string) {
        const validate = await this.eventOwnerRepository.validationEventOwner(hash)

        if (!validate) {
            throw new Error('Erro, codigo invalido!')
        }

        if (validate.used) {
            throw new Error('Erro, codigo ja usado!')
        }

        const now = Date.now()
        if (validate.expiredate.getTime() < now) {
            throw new Error('Codigo expirado!')
        }

        await this.eventOwnerRepository.markAsUsed(hash)
        await this.emailService.sendEmail(validate.EventOwner.email, 'Sucesso!', `Cadastrado com sucesso! Agora você pode acessar a sua conta`)
    }
}
