import { getCategoriesAndDocuments } from '../../services/firebase/firebase';
import { CATEGORIES_ACTION_TYPE } from './categories.types';

const fetchCategoriesStart = () => (
  { type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START }
);

const fetchCategoriesSuccess = (categories) => (
  { type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, payload: categories }
);

const fetchCategoriesFailed = (error) => (
  { type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, payload: error }
);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categories = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
}
