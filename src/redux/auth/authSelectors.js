export const setName = state => state.auth.user.name;

export const avatarURL = state => state.auth.user.avatarURL;

export const getTheme = state => state.auth.user.theme;

export const getBoard = state => state.auth.user.boards;

export const setToken = state => state.token;

export const isLogin = state => state.auth.isLoggedIn;

export const isRefreshing = state => state.auth.isRefreshing;

export const getError = state => state.auth.error;

export const getBoardSelector = state => state.auth.user.boards;
