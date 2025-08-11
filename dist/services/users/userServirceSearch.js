import { User } from '../../models/users/User.js';
export async function searchUserData(clerkId) {
    return await User.findOne({ clerkId });
}
//# sourceMappingURL=userServirceSearch.js.map