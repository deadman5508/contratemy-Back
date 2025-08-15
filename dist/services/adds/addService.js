import { User } from "../../models/users/User.js";
export const addService = async (city) => {
    const query = { workerStatus: 'worker' };
    // Se city foi enviada, adiciona ao filtro
    if (city) {
        query.city = city; // Se for array no schema, o Mongo já filtra se contiver a city
    }
    const users = await User.find(query)
        .sort({ createdAt: -1 })
        .limit(50)
        .select('clerkId name surname description profession skills reviews city images');
    return users;
};
//# sourceMappingURL=addService.js.map