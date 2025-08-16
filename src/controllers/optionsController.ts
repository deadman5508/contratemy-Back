import type { Request, Response } from 'express';
import { options } from '../config/options.js';

export function getOptions(req: Request, res: Response) {
  const { fields } = req.query;

  if (fields) {
    // Se fields for string (uma única opção) ou array (várias)
    const fieldList = Array.isArray(fields)
      ? fields
      : (fields as string).split(',').map(f => f.trim());

    const result: Record<string, any> = {};

    fieldList.forEach(f => {
      if (typeof f === 'string' && f in options) {
        result[f] = options[f as keyof typeof options];
      }
    });


    if (Object.keys(result).length === 0) {
      return res.status(400).json({ error: `Nenhum dos campos solicitados foi encontrado.` });
    }

    return res.status(200).json(result);
  }

  // Se não passar fields, retorna todas as opções
  return res.status(200).json(options);
}
