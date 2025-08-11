import { User } from '../../models/users/User.js';

export async function searchUserData(clerkId: string) {
  return await User.findOne({ clerkId });
}
