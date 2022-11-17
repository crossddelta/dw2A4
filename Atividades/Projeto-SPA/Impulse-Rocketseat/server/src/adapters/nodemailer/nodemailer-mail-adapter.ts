import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport =  nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3995d87cfb75d8",
      pass: "03a2356bd97401"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body}: SendMailData){
    await transport.sendMail({
        from: 'Equipe Climer <suporte@climer.com>',
        to: "Danilo Lessa <danilo.lessa@aluno.ifsp.edu.br>",
        subject,
        html: body,
    });
    }
}