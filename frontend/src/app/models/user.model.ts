export interface User {
    studentId: number;
    firstName: string;
    lastName: string;
    email: string;
    physics: number;
    chemistry: number;
    maths: number;
    description: string;
    profile: string;
    address: string;
    createdAt: string;
    updatedAt: string;
}

export interface UserToAdd {
    firstName: string;
    lastName: string;
    email: string;
    physics: number;
    chemistry: number;
    maths: number;
    description: string;
    profile: string;
    address: string;
}

