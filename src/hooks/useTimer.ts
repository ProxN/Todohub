import { useEffect } from 'react';
import {
  Actions,
  ITimerState,
  IUseTimer,
  TimerSettings,
} from '../types/timer.types';
import useLocalStorage from './useLocalStorage';

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

const resetTimer = (): Actions => {
  return {
    type: 'RESET_TIMER',
    payload: '',
  };
};

const toggleSound = (toggler: boolean): Actions => {
  return {
    type: 'TOGGLE_SOUND',
    payload: toggler,
  };
};

const updateTimerSettings = (settings: TimerSettings): Actions => {
  return {
    type: 'UPDATE_TIMER_SETTINGS',
    payload: settings,
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
    work: 25,
    shortBreak: 5,
    longBreak: 20,
    rounds: 4,
  },
  timerDisplay: '25:00',
  cycle: 'work',
  count: 1,
  timer: 1500,
  isRunning: false,
  notification: true,
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

    case 'RESET_TIMER': {
      const currentTimer = state.settings.work * 60;
      return {
        ...state,
        timer: currentTimer,
        timerDisplay: formatTime(currentTimer),
        cycle: 'work',
        count: 1,
        isRunning: false,
      };
    }

    case 'TOGGLE_SOUND':
      return {
        ...state,
        notification: payload as boolean,
      };

    case 'UPDATE_TIMER_SETTINGS': {
      const timerSettings = payload as TimerSettings;
      const currentTimer = timerSettings.work * 60;
      return {
        ...state,
        timer: currentTimer,
        timerDisplay: formatTime(currentTimer),
        isRunning: false,
        count: 1,
        settings: payload as TimerSettings,
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
  const { state, dispatch } = useLocalStorage<ITimerState, Actions>(
    'timer-settings',
    reducer,
    InitialState
  );
  const { isRunning, timer, cycle, settings, count } = state;
  const { shortBreak, work, rounds, longBreak } = settings;

  const handlePlayAudio = (): void => {
    if (state.notification) {
      // eslint-disable-next-line global-require
      const audio = new Audio(require('../assets/swiftly.mp3'));
      audio.play();
      const interval = setInterval(() => {
        audio.currentTime = 0;
      }, 1000);

      setTimeout(() => {
        audio.pause();
        clearInterval(interval);
      }, 5000);
    }
  };

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => {
        if (timer === 0) {
          if (cycle === 'work' && count === rounds) {
            dispatch(setLongBreak(longBreak * 60));
            handlePlayAudio();
          } else if (cycle === 'work') {
            dispatch(setShortBreak(shortBreak * 60));
            handlePlayAudio();
          } else if (cycle.startsWith('short')) {
            dispatch(setWorkTimer(work * 60));
            handlePlayAudio();
          } else if (cycle.startsWith('long')) {
            dispatch(setWorkTimer(work * 60));
            handlePlayAudio();
          }
          return;
        }
        const calcTimer = timer - 1;

        const timeDisplay = formatTime(calcTimer);
        dispatch(setTimer(calcTimer, timeDisplay));
      }, 1000);
    }

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, timer, cycle, shortBreak]);

  const StartTimer = (): void => {
    dispatch(toggleTimer(true));
  };

  const UpdateTimerSettings = (args: TimerSettings): void => {
    dispatch(updateTimerSettings(args));
  };

  const ToggleSound = (): void => {
    dispatch(toggleSound(!state.notification));
  };

  const StopTimer = (): void => {
    dispatch(toggleTimer(false));
  };

  const Reset = (): void => {
    dispatch(resetTimer());
  };
  return {
    state,
    StartTimer,
    StopTimer,
    Reset,
    ToggleSound,
    UpdateTimerSettings,
  };
};

export default useTimer;
