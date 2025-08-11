import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./routes.js";
import { connectToDatabase } from './database.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
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