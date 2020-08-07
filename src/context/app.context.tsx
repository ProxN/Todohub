import React, { createContext, Dispatch, useReducer } from 'react';
import appReducer, { InitialState } from '../store/goal/reducers';
import { IState, Actions } from '../store/goal/types';

export const Context = createContext<{
  state: IState;
  dispatch: Dispatch<Actions>;
}>({ state: InitialState, dispatch: () => null });

const AppContext: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, InitialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default AppContext;
