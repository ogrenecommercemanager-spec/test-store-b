export const buildInfo = {
    commitSha: import.meta.env.VITE_COMMIT_SHA || "local",
    environment: import.meta.env.MODE,
};