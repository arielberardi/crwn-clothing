import { CART_ACTION_TYPE } from "./cart.types";

const addCartItem = (cartItems, item) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...item, quantity: 1}]
};

const removeCartItem = (cartItems, item) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  }

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

export const setIsCartOpen = (bool) =>
  ({ type: CART_ACTION_TYPE.SET_CART_OPEN, payload: bool });

export const addItemToCart = (cartItems, item) =>
  ({ type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: addCartItem(cartItems, item) });

export const removeItemFromCart = (cartItems, item) =>
  ({ type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: removeCartItem(cartItems, item) });

export const clearItemFromCart = (cartItems, item) =>
  ({ type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: clearCartItem(cartItems, item) });
