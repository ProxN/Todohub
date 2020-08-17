import { useEffect, useReducer } from 'react';
import { settings } from 'cluster';

const SET_TIMER = 'SET_TIMER';
const TOGGLE_TIMER = 'TOGGLE_TIMER';
const SET_SHORT_BREAK = 'SET_SHORT_BREAK';
const SET_WORK_TIMER = 'SET_WORK_TIMER';
const SET_LONG_BREAK = 'SET_LONG_BREAK';

/**
 * Types
 */

interface ITimerState {
  settings: {
    work: number;
    shortBreak: number;
    longBreak: number;
    rounds: number;
  };
  cycle: 'work' | 'short break' | 'long break';
  count: number;
  timer: number;
  isRunning: boolean;
  timerDisplay: string;
}

interface IUseTimer {
  state: ITimerState;
  StartTimer: () => void;
  StopTimer: () => void;
}

interface SetTimer {
  type: typeof SET_TIMER;
  payload: { timer: number; display: string };
}

interface Toggletimer {
  type: typeof TOGGLE_TIMER;
  payload: boolean;
}

interface SetShortBreak {
  type: typeof SET_SHORT_BREAK;
  payload: number;
}

interface SetWorkTimer {
  type: typeof SET_WORK_TIMER;
  payload: number;
}

interface SetLongBreak {
  type: typeof SET_LONG_BREAK;
  payload: number;
}

type Actions =
  | SetTimer
  | Toggletimer
  | SetShortBreak
  | SetWorkTimer
  | SetLongBreak;

/**
 * Actions
 */

const setTimer = (timer: number, display: string): Actions => {
  return {
    type: 'SET_TIMER',
    payload: { timer, display },
  };
};

const toggleTimer = (isRunning: boolean): Actions => {
  return {
    type: 'TOGGLE_TIMER',
    payload: isRunning,
  };
};

const setShortBreak = (time: number): Actions => {
  return {
    type: 'SET_SHORT_BREAK',
    payload: time,
  };
};

const setWorkTimer = (time: number): Actions => {
  return {
    type: 'SET_WORK_TIMER',
    payload: time,
  };
};

const setLongBreak = (time: number): Actions => {
  return {
    type: 'SET_LONG_BREAK',
    payload: time,
  };
};

/**
 * helpers
 */

const leadingZero = (num: number): string | number => {
  return num < 10 ? `0${num}` : num;
};

const formatTime = (timeInSec: number): string => {
  const minutes = leadingZero(Math.floor(timeInSec / 60));
  const seconds = leadingZero(timeInSec % 60);

  const timeDisplay = `${minutes}:${seconds}`;
  return timeDisplay;
};
/**
 * Reducer
 */

const InitialState: ITimerState = {
  settings: {
    work: 1,
    shortBreak: 1,
    longBreak: 1,
    rounds: 2,
  },
  timerDisplay: '01:00',
  cycle: 'work',
  count: 1,
  timer: 60,
  isRunning: false,
};

const reducer = (state = InitialState, actions: Actions): ITimerState => {
  const { type, payload } = actions;
  switch (type) {
    case 'TOGGLE_TIMER':
      return {
        ...state,
        isRunning: payload as boolean,
      };
    case 'SET_TIMER': {
      const { timer, display } = payload as { timer: number; display: string };
      return {
        ...state,
        timer,
        timerDisplay: display,
      };
    }

    case 'SET_SHORT_BREAK': {
      const currentTime = payload as number;
      return {
        ...state,
        timer: currentTime,
        timerDisplay: formatTime(currentTime),
        isRunning: false,
        cycle: 'short break',
      };
    }

    case 'SET_WORK_TIMER': {
      const currentTime = payload as number;
      return {
        ...state,
        timer: currentTime,
        timerDisplay: formatTime(currentTime),
        isRunning: false,
        cycle: 'work',
        count: state.count === state.settings.rounds ? 1 : state.count + 1,
      };
    }

    case 'SET_LONG_BREAK': {
      const currentTime = payload as number;
      return {
        ...state,
        timer: currentTime,
        timerDisplay: formatTime(currentTime),
        isRunning: false,
        cycle: 'long break',
      };
    }

    default:
      return state;
  }
};

/**
 * useTimer Hook
 */

const useTimer = (): IUseTimer => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  const { isRunning, timer, cycle, settings, count } = state;
  const { shortBreak, work, rounds, longBreak } = settings;

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => {
        if (timer === 0) {
          if (cycle === 'work' && count === rounds) {
            dispatch(setLongBreak(longBreak * 60));
          } else if (cycle === 'work') {
            dispatch(setShortBreak(shortBreak * 60));
          } else if (cycle.startsWith('short')) {
            dispatch(setWorkTimer(work * 60));
          } else if (cycle.startsWith('long')) {
            dispatch(setWorkTimer(work * 60));
          }
          return;
        }
        const calcTimer = timer - 1;

        const timeDisplay = formatTime(calcTimer);
        dispatch(setTimer(calcTimer, timeDisplay));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timer, cycle, shortBreak]);

  const StartTimer = (): void => {
    dispatch(toggleTimer(true));
  };

  const StopTimer = (): void => {
    dispatch(toggleTimer(false));
  };

  return { state, StartTimer, StopTimer };
};

export default useTimer;
