export default (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false
      };
    case 'AUTH_ERROR':
    case 'LOGIN_FAIL':
      return {
        ...state,
        error: action.payload
      };
    case 'CLEAR_ERRORS':
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
