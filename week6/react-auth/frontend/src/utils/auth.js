// frontend/src/utils/auth.js
export const setAuthToken = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
};

export const getAuthToken = () => {
    const user = sessionStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export const removeAuthToken = () => {
    sessionStorage.removeItem("user");
};

export const isAuthenticated = () => {
    return !!getAuthToken();
};