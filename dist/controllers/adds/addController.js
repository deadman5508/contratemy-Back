import { addService } from "../../services/adds/addService.js";
export const addController = async (req, res) => {
    try {
        const { city } = req.query;
        const workers = await addService(city);
        res.json(workers);
    }
    catch (error) {
        console.error("Erro ao buscar workers:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};
//# sourceMappingURL=addController.js.map