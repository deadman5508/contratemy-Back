import { User } from '../../models/users/User.js';

interface CreateUserDTO {
  clerkId: string;
  name?: string;
  email: string;
}

export async function createOrUpdateUser(data: CreateUserDTO) {
  const existing = await User.findOne({ clerkId: data.clerkId });

  if (existing) {
    await User.updateOne({ clerkId: data.clerkId }, data);
    return { updated: true };
  }

  await User.create(data);
  return { created: true };
}
