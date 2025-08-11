import type { Request, Response } from 'express';
import { createOrUpdateUser } from '../../services/users/userService.js';

export async function syncUserWithClerk(req: Request, res: Response) {
  try {
    const { clerkId, name, email} = req.body;

    if (!clerkId || !email) {
      return res.status(400).json({ error: 'clerkId e email são obrigatórios.' });
    }

    const result = await createOrUpdateUser({ clerkId, name, email});

    return res.status(200).json({ message: 'Usuário sincronizado com sucesso.', ...result });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao sincronizar usuário.', details: error });
  }
}
