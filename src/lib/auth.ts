export const getAuthToken = () => localStorage.getItem('token');
export const setAuthToken = (token: string) => localStorage.setItem('token', token);
export const clearAuthToken = () => localStorage.removeItem('token');
export const isAuthenticated = () => !!getAuthToken();