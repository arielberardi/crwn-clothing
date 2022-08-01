import './categories.scss';
import CategoryItem from '../category-item';

const Categories = ({ categories }) => (
  <div className='categories-container'>
  {categories.map((category) => (
    <CategoryItem category={category} key={category.id} />
  ))}
  </div>
);

export default Categories;
