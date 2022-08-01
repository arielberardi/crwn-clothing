import './category-item.scss';

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className='category-container'>
      <div
        className='category-background'
        style={{
          backgroundImage: `url(${imageUrl})`
      }} />
      <div className='category-body'>
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
