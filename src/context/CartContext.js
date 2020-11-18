import * as React from 'react';
import { getProductDetails } from '../utils/helper';

const CartContext = React.createContext();

const CartDispatchContext = React.createContext();

// handle add to cart action
const addToCart = (state, key) => {
  if (state && !state[key]) {
    return {
      ...state,
      [key]: {
        count: 1,
        product: getProductDetails(key),
      },
    };
  }
  return {
    ...state,
    [key]: {
      ...state[key],
      count: state[key].count + 1,
    },
  };
};

// handle remove from cart action
const removeFromCart = (state, key) => {
  if (state[key].count === 1) {
    delete state[key];
    return { ...state };
  }
  return {
    ...state,
    [key]: {
      ...state[key],
      count: state[key].count - 1,
    },
  };
};

// Cart reducers
function carttReducer(state, action) {
  const { type, key } = action;
  switch (type) {
    case 'addToCart': // TODO actions could have been constants
      return addToCart(state, key);
    case 'removeFromCart': {
      return removeFromCart(state, key);
    }
    case 'clearCart':
      return {};
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Cart Provider
function CartProvider({ children }) {
  let cart = JSON.parse(window.localStorage.getItem('digi_cart')) || {}; // if already empty in localstore {}
  const [state, dispatch] = React.useReducer(carttReducer, cart);
  window.localStorage.setItem('digi_cart', JSON.stringify(state));
  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

function useCartState() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartState must be used within a CartProvider'); // being extra cautios
  }
  return context;
}
function useCartDispatch() {
  const context = React.useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
}

export { CartProvider, useCartState, useCartDispatch };
