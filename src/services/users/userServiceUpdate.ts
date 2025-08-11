import { User } from '../../models/users/User.js';

export async function updateUserData(clerkId: string, updateFields: Record<string, any>) {
  const result = await User.findOneAndUpdate(
    { clerkId },
    { $set: updateFields },
    { new: true}
  );

  return result;
}
