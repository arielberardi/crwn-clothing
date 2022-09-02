import { useEffect, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { selectCategoriesMap } from '../../store/categories/categories.reducer';
import ProductCard from '../product-card/product-card';

import { CategoryContainer, Title } from './category.style';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
      {products && products.map(
        (product) => (<ProductCard key={product.id} product={product} />)
      )}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
