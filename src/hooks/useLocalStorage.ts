import { useReducer, useEffect, Dispatch } from 'react';
import { IState, Actions } from '../store/types';

interface IUseLocalArgs {
  key: string;

  reducer: (state: IState, actions: Actions) => IState;
  initialState: IState;
}

interface IUseLocalStorage {
  state: IState;
  dispatch: Dispatch<Actions>;
}

const useLocalStorage = ({
  key,
  reducer,
  initialState,
}: IUseLocalArgs): IUseLocalStorage => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    let value: IState;

    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(initialState)
      ) as IState;
    } catch (error) {
      value = initialState;
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return { state, dispatch };
};

export default useLocalStorage;
