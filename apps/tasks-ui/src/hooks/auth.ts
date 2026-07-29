export function useAuth() {
    const token = sessionStorage.getItem('maj-tasks-token');

    return { isAuthenticated: Boolean(token), token };
}