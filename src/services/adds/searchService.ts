import { User } from "../../models/users/User.js";

export const searchService = async (city?: string, profession?: string) => {
  const query: Record<string, any> = { workerStatus: "worker" };

  // Filtro de cidade (MongoDB já verifica arrays automaticamente)
  if (city) {
    query.city = city;
  }

  // Filtro de profissão
  if (profession) {
    query.profession = profession;
  }

  const users = await User.find(query)
    .sort({ createdAt: -1 })
    .limit(50)
    .select("clerkId name surname description profession skills availability reviews city images");

  return users;
};
