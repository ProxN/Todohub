import React, { createContext, Dispatch } from 'react';
import appReducer, { InitialState } from '../store/reducers';
import { IState, Actions } from '../store/types';
import useLocalStorage from '../hooks/useLocalStorage';

export const Context = createContext<{
  state: IState;
  dispatch: Dispatch<Actions>;
}>({ state: InitialState, dispatch: () => null });

const AppContext: React.FC = ({ children }) => {
  // const [state, dispatch] = useReducer(appReducer, InitialState);
  const { state, dispatch } = useLocalStorage<IState, Actions>(
    'state',
    appReducer,
    InitialState
  );
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default AppContext;
