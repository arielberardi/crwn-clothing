export const CATEGORIES_ACTION_TYPE = {
  SET_CATEGORIES: 'categories/SET_CATEGORIES',
};

export const selectCategoriesMap = (state) => {
  const categoriesMap = state.categories.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  },{});

  return categoriesMap;
};

export const setCategories = (categories) => (
  { type: CATEGORIES_ACTION_TYPE.SET_CATEGORIES, payload: categories }
);

const INITIAL_STATE = {
  categories: []
};

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action

  switch (type) {
    case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
      return {...state, categories: payload };
    default:
      return state;
  }
};
