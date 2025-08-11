import mongoose from 'mongoose';
export declare const User: mongoose.Model<{
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
    name?: string | null;
    description?: string | null;
    phone?: string | null;
    surname?: string | null;
    profession?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
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
    name?: string | null;
    description?: string | null;
    phone?: string | null;
    surname?: string | null;
    profession?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
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
    name?: string | null;
    description?: string | null;
    phone?: string | null;
    surname?: string | null;
    profession?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
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
    name?: string | null;
    description?: string | null;
    phone?: string | null;
    surname?: string | null;
    profession?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
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
    name?: string | null;
    description?: string | null;
    phone?: string | null;
    surname?: string | null;
    profession?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=User.d.ts.map