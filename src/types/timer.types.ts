const SET_TIMER = 'SET_TIMER';
const TOGGLE_TIMER = 'TOGGLE_TIMER';
const SET_SHORT_BREAK = 'SET_SHORT_BREAK';
const SET_WORK_TIMER = 'SET_WORK_TIMER';
const SET_LONG_BREAK = 'SET_LONG_BREAK';
const RESET_TIMER = 'RESET_TIMER';
const TOGGLE_SOUND = 'TOGGLE_SOUND';
const UPDATE_TIMER_SETTINGS = 'UPDATE_TIMER_SETTINGS';

/**
 * Types
 */

export interface TimerSettings {
  work: number;
  shortBreak: number;
  longBreak: number;
  rounds: number;
}

export interface ITimerState {
  settings: TimerSettings;
  cycle: 'work' | 'short break' | 'long break';
  count: number;
  timer: number;
  isRunning: boolean;
  timerDisplay: string;
  notification: boolean;
}

export interface IUseTimer {
  state: ITimerState;
  StartTimer: () => void;
  StopTimer: () => void;
  Reset: () => void;
  ToggleSound: () => void;
  UpdateTimerSettings: (timerSettings: TimerSettings) => void;
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

interface ResetTimer {
  type: typeof RESET_TIMER;
  payload?: any;
}

interface ToggleNotification {
  type: typeof TOGGLE_SOUND;
  payload: boolean;
}

interface UpdateTimerSettings {
  type: typeof UPDATE_TIMER_SETTINGS;
  payload: TimerSettings;
}

export type Actions =
  | SetTimer
  | Toggletimer
  | SetShortBreak
  | SetWorkTimer
  | SetLongBreak
  | ResetTimer
  | ToggleNotification
  | UpdateTimerSettings;
