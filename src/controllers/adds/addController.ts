import type { Request, Response } from "express";
import { addService } from "../../services/adds/addService.js";

export const addController = async (req: Request, res: Response) => {
  try {

    const { city } = req.query; 

    const workers = await addService(city as string | undefined);
    res.json(workers);
  } catch (error) {
    console.error("Erro ao buscar workers:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};
