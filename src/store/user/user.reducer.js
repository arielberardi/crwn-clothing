export const USER_ACTION_TYPES = {
  'SET_CURRENT_USER': 'user/SET_CURRENT_USER'
};

export const selectCurrentUser = (state) => state.user.currentUser;

export const setCurrentUser = (user) => (
  { type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user }
);

const INITIAL_STATE = {
  currentUser: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload }
    default:
      return state;
  }
}
