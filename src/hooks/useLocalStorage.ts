import { useReducer, useEffect, Dispatch } from 'react';
import { IState, Actions } from '../store/types';
// import { ITimerState } from './useTimer';

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
  const stateWithoutModal = { ...initialState };

  stateWithoutModal.modal = undefined;
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
    window.localStorage.setItem(key, JSON.stringify(stateWithoutModal));
  }, [key, stateWithoutModal]);

  return { state, dispatch };
};

export default useLocalStorage;
