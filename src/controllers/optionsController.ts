import type { Request, Response } from 'express';
import { options } from '../config/options.js';

export function getOptions(req: Request, res: Response) {
  return res.status(200).json(options);
}
