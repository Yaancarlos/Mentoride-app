export type Role = "admin" | "tutor" | "student";

export interface MockUserRole {
    email: string;
    password: string;
    role: Role;
    fullName: string;
}