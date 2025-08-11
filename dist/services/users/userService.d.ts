interface CreateUserDTO {
    clerkId: string;
    name?: string;
    email: string;
}
export declare function createOrUpdateUser(data: CreateUserDTO): Promise<{
    updated: boolean;
    created?: never;
} | {
    created: boolean;
    updated?: never;
}>;
export {};
//# sourceMappingURL=userService.d.ts.map