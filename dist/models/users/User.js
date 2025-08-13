import mongoose from 'mongoose';
const imageSchema = new mongoose.Schema({
    url: String,
    publicId: String,
    createdAt: Date,
});
const UserSchema = new mongoose.Schema({
    clerkId: { type: String, required: true, unique: true }, // ID do Clerk
    name: { type: String },
    email: { type: String, required: true, unique: true },
    workerStatus: {
        type: String,
        enum: ['not_worker', 'worker', 'business'],
        default: 'not_worker',
        required: true
    },
    //Dados extras
    description: { type: String },
    phone: { type: String },
    surname: { type: String },
    social: [{ type: String }],
    city: [{ type: String }],
    state: [{ type: String }],
    district: [{ type: String }],
    profession: { type: String },
    skills: [{ type: String }],
    availability: [{ type: String }],
    hours: [{ type: String }],
    payments: [{ type: String }],
    reviews: [{ type: Number }],
    images: [[imageSchema]]
}, {
    timestamps: true
});
export const User = mongoose.model('User', UserSchema);
//# sourceMappingURL=User.js.map