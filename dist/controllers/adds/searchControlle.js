import { searchService } from "../../services/adds/searchService.js";
export const searchController = async (req, res) => {
    try {
        const { city, profession } = req.query;
        const workers = await searchService(city, profession);
        res.json(workers);
    }
    catch (error) {
        console.error("Erro ao buscar workers:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};
//# sourceMappingURL=searchControlle.js.map