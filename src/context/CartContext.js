import * as React from 'react';
import { getProductDetails } from '../utils/helper';

const CartContext = React.createContext();

const CartDispatchContext = React.createContext();

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

function carttReducer(state, action) {
  const { type, key } = action;
  switch (type) {
    case 'addToCart': {
      return addToCart(state, key);
    }
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
function CarttProvider({ children }) {
  let cart = JSON.parse(window.localStorage.getItem('digi_cart'))|| {};
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
function useCarttState() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCarttState must be used within a CarttProvider');
  }
  return context;
}
function useCartDispatch() {
  const context = React.useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error('useCartDispatch must be used within a CarttProvider');
  }
  return context;
}
export { CarttProvider, useCarttState, useCartDispatch}