import { searchUserData } from '../../services/users/userServirceSearch.js';
export async function searchUser(req, res) {
    try {
        const { clerkId } = req.params;
        if (!clerkId) {
            return res.status(400).json({ error: 'clerkId é obrigatório.' });
        }
        const search = await searchUserData(clerkId);
        if (!search) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }
        const { __v, ...cleanUser } = search.toObject();
        return res.status(200).json(cleanUser);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar usuário.', details: error });
    }
}
//# sourceMappingURL=userControllerSearch.js.map