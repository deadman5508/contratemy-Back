// src/controllers/userController.ts
import { v2 as cloudinary } from 'cloudinary';
import { User } from '../models/users/User.js';
// Configuração do Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
export const uploadUserImage = async (req, res) => {
    try {
        const { userId, imageBase64 } = req.body;
        if (!imageBase64) {
            return res.status(400).json({ error: 'Imagem não enviada' });
        }
        // Upload direto do Base64
        const result = await cloudinary.uploader.upload(imageBase64, {
            folder: `users/${userId}`,
        });
        // Atualiza no Mongo
        const user = await User.findByIdAndUpdate(userId, {
            $push: {
                images: {
                    url: result.secure_url,
                    publicId: result.public_id,
                    createdAt: new Date(),
                },
            },
        }, { new: true });
        res.json({ success: true, user });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao enviar imagem' });
    }
};
//# sourceMappingURL=userImagesController.js.map