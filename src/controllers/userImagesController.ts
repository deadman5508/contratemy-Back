// src/controllers/userController.ts
import { v2 as cloudinary } from 'cloudinary';
import { User } from '../models/users/User.js';
import type { Request, Response } from 'express';

// Configuração do Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const uploadUserImage = async (req: Request, res: Response) => {
  try {
    const {imageBase64} = req.body;
    const {clerkId} = req.params;

    if (!imageBase64) {
      return res.status(400).json({ error: 'Imagem não enviada' });
    }

    // Upload direto do Base64
    const result = await cloudinary.uploader.upload(imageBase64, {
      folder: `users/${clerkId}`,
    });

    // Atualiza no Mongo
    const user = await User.findOneAndUpdate(
      {clerkId},
      {
        $push: {
          images: {
            url: result.secure_url,
            publicId: result.public_id,
            createdAt: new Date(),
          },
        },
      },
      { new: true }
    );

    res.json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao enviar imagem' });
  }
};
