import * as React from 'react';

const CartContext = React.createContext();

const CartDispatchContext = React.createContext();
function carttReducer(state, action) {
  const { type, key } = action;
  console.log(type, key, state);
  switch (type) {
    case 'addToCart': {
      if (state && !state[key]) {
        return {
          ...state,
          [key]: {
            count: 1,
          },
        };
      }
      console.log("object")
      return {
        ...state,
        [key]: {
          ...state[key],
          count: state[key].count + 1,
        },
      };
    }
    case 'removeFromCart': {
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
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function CountProvider({ children }) {
  const [state, dispatch] = React.useReducer(carttReducer, { });
  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}
function useCountState() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
}
function useCountDispatch() {
  const context = React.useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider');
  }
  return context;
}
export { CountProvider, useCountState, useCountDispatch}