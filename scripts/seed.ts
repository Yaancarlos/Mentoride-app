import { createAuthenticationUser } from "../src/lib/auth";

(async () => {
    try {
       //await createAuthenticationUser('tutor@uc.edu.co', '123456', 'admin', 'tutor');
       await createAuthenticationUser('admin@uc.edu.co', '123456', 'admin', 'admin');
       console.log("Authentication created");
    } catch (error) {
        console.error("Error signing up:", error);
    }
})();