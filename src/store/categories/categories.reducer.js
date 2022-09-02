import { CATEGORIES_INITIAL_STATE, CATEGORIES_ACTION_TYPE } from "./categories.types";

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action

  switch (type) {
    case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
      return {...state, categories: payload };
    default:
      return state;
  }
};
