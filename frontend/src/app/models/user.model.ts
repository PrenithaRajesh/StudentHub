export interface User {
    studentId: number;
    firstName: string;
    lastName: string;
    email: string;
    physics: string;
    chemistry: string;
    maths: string;
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
    physics: string;
    chemistry: string;
    maths: string;
    description: string;
    profile: string;
    address: string;
}

