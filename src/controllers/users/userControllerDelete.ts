import type { Request, Response } from 'express';
import { deleteUserData } from "../../services/users/userServiceDelete.js"; 

export const deleteUserController = async (req:Request, res:Response) => {
  const { clerkId } = req.params;
  try {
    await deleteUserData(clerkId as string);
    res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
};
