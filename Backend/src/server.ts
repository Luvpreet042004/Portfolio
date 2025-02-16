import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Cors from "cors";
import EkiliMailer from 'ekilirelay';

dotenv.config();

const app: Express = express();
app.use(Cors());
app.use(express.json());

const port = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY || " ";

const mailer = new EkiliMailer(API_KEY);

app.post("/send-email", async (req: Request, res: Response) => {
    try {
        const { name, email, message } = req.body;
        const sub = `Got Your Message! I'll Be in Touch Soon`;
        const msg = `Hi ${name},\nThank you for getting in touch! I’ve received your message and will get back to you as soon as possible. Looking forward to our conversation!\nBest,\nLuvpreet Singh\n+91 7657937890`

        await mailer.sendEmail(email, sub, msg);

        const ourMsg = 
        `Client name : ${name}
         Email : ${email}
         Message : ${message}
        `
        await mailer.sendEmail("luvpreetsingh8566@gmail.com","New Client",ourMsg)


        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send email", error });
    }
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
