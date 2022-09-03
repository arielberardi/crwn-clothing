import { CATEGORIES_ACTION_TYPE } from './categories.types';

export const fetchCategoriesStart = () => (
  { type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START }
);

export const fetchCategoriesSuccess = (categories) => (
  { type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, payload: categories }
);

export const fetchCategoriesFailed = (error) => (
  { type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, payload: error }
);
