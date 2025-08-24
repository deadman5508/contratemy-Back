import type { Request, Response } from 'express';
import { v2 as cloudinary } from 'cloudinary';
import { User } from '../models/users/User.js';


export const removeUserImage = async (req: Request, res: Response) => {
  try {
    const { clerkId } = req.params;
    const { publicId } = req.body;

    if (!publicId) {
      return res.status(400).json({ error: "publicId é obrigatório" });
    }

    // Apaga do Cloudinary
    await cloudinary.uploader.destroy(publicId);

    // Remove do Mongo
    const user = await User.findOneAndUpdate(
      { clerkId },
      { $pull: { images: { publicId } } },
      { new: true }
    );

    res.json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao remover imagem" });
  }
};
