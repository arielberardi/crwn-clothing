import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button';

import { ProductCardContainer, Footer, Name, Price } from './product-card.style';

const ProductCard = ({ product }) => {
  const {name, imageUrl, price} = product;
  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer className='product-card-container'>
      <img src={imageUrl} alt={`${name}`}/>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to car</Button>
    </ProductCardContainer>
  );
}

export default ProductCard;
