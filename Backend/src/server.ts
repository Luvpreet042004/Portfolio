import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from './routes';

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors({
    origin: "*",
    methods: "GET,POST",
    allowedHeaders: "Content-Type,Authorization"
}));

const port = process.env.PORT || 3000;

// Middleware to log all requests with IST time
app.use((req: Request, res: Response, next: NextFunction) => {
    const istTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    console.log(`[${istTime}] ${req.method} ${req.url}`);
    next();
});

app.use("/api",routes)

app.listen(port, () => {
    const istTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    console.log(`[${istTime}] [server]: Server is running at http://localhost:${port}`);
});
