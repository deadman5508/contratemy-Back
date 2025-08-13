import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./routes.js";
import { connectToDatabase } from './database.js';
import path from 'path';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(router);
app.use(express.static(path.join(process.cwd(), "public")));
app.get('/', (req, res) => {
    res.status(200).send('Welcome to ContrateMy backend!');
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ status: 'error', message: err.message || 'Erro interno do servidor' });
});
connectToDatabase();
export default app;
//# sourceMappingURL=index.js.map