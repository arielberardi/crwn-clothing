import './categories.scss';
import DirectoryItem from '../directory-item/directory-item';

const Categories = ({ categories }) => (
  <div className='categories-container'>
    {categories.map((category) => (
      <DirectoryItem category={category} key={category.id} />
    ))}
  </div>
);

export default Categories;
