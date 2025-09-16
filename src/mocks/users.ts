import {MockUserRole} from "../types";

export const MOCK_USERS: Record<string, MockUserRole> = {
    'admin@uc.edu.co' : {
        email: 'admin@uc.edu.co',
        password: 'admin',
        role: 'admin',
        fullName: 'Admin User',
    },
    'tutor@uc.edu.co' : {
        email: 'tutor@uc.edu.co',
        password: 'tutor',
        role: 'tutor',
        fullName: 'Tutor User',
    },
    'student@uc.edu.co' : {
        email: 'student@uc.edu.co',
        password: 'student',
        role: 'student',
        fullName: 'Student User',
    },
};