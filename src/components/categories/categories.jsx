import DirectoryItem from '../directory-item/directory-item';

import { CategoriesContainer } from './categories.style'

const Categories = ({ categories }) => (
  <CategoriesContainer>
    {categories.map((category) => (
      <DirectoryItem category={category} key={category.id} />
    ))}
  </CategoriesContainer>
);

export default Categories;
