import type { Request, Response, NextFunction } from 'express';
import { verifyToken } from '@clerk/backend';
import 'dotenv/config';

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Token ausente ou inválido' });
    }

    const token = authHeader.replace('Bearer ', '').trim();

    // Valida o token com Clerk
    const { payload } = await verifyToken(token, {
      secretKey:process.env.CLERK_API_KEY!, 
    });

    // Anexa info do usuário na requisição
    (req as any).auth = payload;

    next();
  } catch (err) {
    console.error('Erro de autenticação:', err);
    return res.status(401).json({ message: 'Não autorizado' });
  }
}
