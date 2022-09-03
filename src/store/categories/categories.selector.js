import { createSelector } from 'reselect';

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categories
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
