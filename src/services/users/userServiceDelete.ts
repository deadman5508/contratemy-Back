import { User } from '../../models/users/User.js';

export async function deleteUserData(clerkId: string) {
  const result = await User.findOneAndDelete(
    { clerkId },
  );

  return result;
}
