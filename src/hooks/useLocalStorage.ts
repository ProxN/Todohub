import { useReducer, useEffect, Dispatch } from 'react';
import { IState, Actions } from '../store/types';
import { ITimerState, Actions as TimerActions } from '../types/timer.types';

type ILocalState = IState | ITimerState;
type ILocalActions = Actions | TimerActions;

interface IUseLocalStorage<S, A> {
  state: S;
  dispatch: Dispatch<A>;
}

const useLocalStorage = <S extends ILocalState, A extends ILocalActions>(
  key: string,
  reducer: (state: S, actions: A) => S,
  initialState: S
): IUseLocalStorage<S, A> => {
  Reflect.deleteProperty(initialState, 'modal');
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    let value: S;

    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(initialState)
      ) as S;
    } catch (error) {
      value = initialState;
    }
    Reflect.deleteProperty(value, 'modal');
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return { state, dispatch };
};

export default useLocalStorage;
