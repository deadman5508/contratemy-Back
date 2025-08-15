import type { Request, Response } from "express";
import { searchService } from "../../services/adds/searchService.js";

export const searchController = async (req: Request, res: Response) => {
  try {
    const { city, profession } = req.query;

    const workers = await searchService(
      city as string | undefined,
      profession as string | undefined
    );

    res.json(workers);
  } catch (error) {
    console.error("Erro ao buscar workers:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};
