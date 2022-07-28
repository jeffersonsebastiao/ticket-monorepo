import nodemail from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export class EmailService {
    private readonly transporter: Mail

    constructor() {
        this.transporter = nodemail.createTransport({
            host: process.env.HOST_EMAIL,
            port: parseInt(process.env.PORT_EMAIL!),
            secure: false,
            auth: {
              user: process.env.USER_EMAIL, 
              pass: process.env.PASS_EMAIL, 
            },
          });
    }

    async sendEmail(to: string, subject: string, html: string){
        const info = await this.transporter.sendMail({
            from: process.env.USER_EMAIL, 
            to: to, 
            subject: subject, 
            html: html, 
          });

          console.log(info.messageId)
    }

}

