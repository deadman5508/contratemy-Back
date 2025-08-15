export declare function updateUserData(clerkId: string, updateFields: Record<string, any>): Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    clerkId: string;
    email: string;
    workerStatus: "not_worker" | "worker" | "business";
    social: string[];
    city: string[];
    state: string[];
    district: string[];
    skills: string[];
    availability: string[];
    hours: string[];
    payments: string[];
    reviews: number[];
    images: import("mongoose").Types.DocumentArray<{
        url?: string | null;
        publicId?: string | null;
        createdAt?: NativeDate | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
        url?: string | null;
        publicId?: string | null;
        createdAt?: NativeDate | null;
    }> & {
        url?: string | null;
        publicId?: string | null;
        createdAt?: NativeDate | null;
    }>;
    photoProfile: import("mongoose").Types.DocumentArray<{
        url?: string | null;
        publicId?: string | null;
        createdAt?: NativeDate | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
        url?: string | null;
        publicId?: string | null;
        createdAt?: NativeDate | null;
    }> & {
        url?: string | null;
        publicId?: string | null;
        createdAt?: NativeDate | null;
    }>;
    name?: string | null;
    description?: string | null;
    phone?: string | null;
    surname?: string | null;
    profession?: string | null;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    clerkId: string;
    email: string;
    workerStatus: "not_worker" | "worker" | "business";
    social: string[];
    city: string[];
    state: string[];
    district: string[];
    skills: string[];
    availability: string[];
    hours: string[];
    payments: string[];
    reviews: number[];
    images: import("mongoose").Types.DocumentArray<{
        url?: string | null;
        publicId?: string | null;
        createdAt?: NativeDate | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
        url?: string | null;
        publicId?: string | null;
        createdAt?: NativeDate | null;
    }> & {
        url?: string | null;
        publicId?: string | null;
        createdAt?: NativeDate | null;
    }>;
    photoProfile: import("mongoose").Types.DocumentArray<{
        url?: string | null;
        publicId?: string | null;
        createdAt?: NativeDate | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
        url?: string | null;
        publicId?: string | null;
        createdAt?: NativeDate | null;
    }> & {
        url?: string | null;
        publicId?: string | null;
        createdAt?: NativeDate | null;
    }>;
    name?: string | null;
    description?: string | null;
    phone?: string | null;
    surname?: string | null;
    profession?: string | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
//# sourceMappingURL=userServiceUpdate.d.ts.map