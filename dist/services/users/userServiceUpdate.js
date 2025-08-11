import { User } from '../../models/users/User.js';
export async function updateUserData(clerkId, updateFields) {
    const result = await User.findOneAndUpdate({ clerkId }, { $set: updateFields }, { new: true });
    return result;
}
//# sourceMappingURL=userServiceUpdate.js.map