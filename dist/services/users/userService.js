import { User } from '../../models/users/User.js';
export async function createOrUpdateUser(data) {
    const existing = await User.findOne({ clerkId: data.clerkId });
    if (existing) {
        await User.updateOne({ clerkId: data.clerkId }, data);
        return { updated: true };
    }
    await User.create(data);
    return { created: true };
}
//# sourceMappingURL=userService.js.map