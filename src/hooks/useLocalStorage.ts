import { useReducer, useEffect, Dispatch } from 'react';

interface IUseLocalStorage<S, A> {
  state: S;
  dispatch: Dispatch<A>;
}

// eslint-disable-next-line @typescript-eslint/ban-types
const useLocalStorage = <S extends object, A>(
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
