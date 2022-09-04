export interface ICreateEvent {
    title: string;
    description: string;
    ticketLimit: number;
    eventDateHour: Date;
    state: string;
    city: string;
    address: string;
    zipCode: string;
    number: number;
    eventOwnerId: number;
}