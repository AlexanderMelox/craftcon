import React, { createContext, useReducer } from 'react';

// Initial global state
const initialState = {
  editing: false,
  header: {
    navOpen: false,
  },
};

// Create a store context for global state
const store = createContext(initialState);
// Pull the Provider component from context
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'OPEN_NAV':
        return { header: { navOpen: true } };
      case 'CLOSE_NAV':
        return { header: { navOpen: false } };
      case 'TOGGLE_EDITING':
        return { editing: !state.editing };
      default:
        throw new Error(`The action ${action.type} does not exist`);
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
