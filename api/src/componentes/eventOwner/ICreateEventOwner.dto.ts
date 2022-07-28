export interface ICreateEventOwnerDTO {
    name: string;
    email: string;
    cpfCpnj: string;
    password: string;
    phone: number;
    pseudonym: string;
    confirmPassword: string;
    hash: string,
    expiredate: Date
}