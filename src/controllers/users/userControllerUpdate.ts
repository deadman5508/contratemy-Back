import type { Request, Response } from 'express';
import { updateUserData } from '../../services/users/userServiceUpdate.js';

export async function updateUser(req: Request, res: Response) {
  try {
    const { clerkId, ...updateFields } = req.body;

    if (!clerkId) {
      return res.status(400).json({ error: 'clerkId é obrigatório.' });
    }

    const allowedFields = [
      'phone',
      'description',
      'surname',
      'social',
      'city', 
      'state', 
      'district', 
      'profession', 
      'skills', 
      'availability', 
      'hours', 
      'payments', 
      'reviews',
      'workerStatus'
    ];

    const filteredFields: Record<string, any> = {};

    for (const key of Object.keys(updateFields)) {
      if (allowedFields.includes(key)) {
        filteredFields[key] = updateFields[key];
      }
    }

    if (Object.keys(filteredFields).length === 0) {
      return res.status(400).json({ error: 'Nenhum campo válido para atualizar.' });
    }

    const updated = await updateUserData(clerkId, filteredFields);

    if (!updated) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    // Transformar em objeto simples para resposta limpa
    const { __v, ...cleanUser } = updated.toObject();

    return res.status(200).json({ message: 'Usuário atualizado com sucesso.', user: cleanUser });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar usuário.', details: error });
  }
}
