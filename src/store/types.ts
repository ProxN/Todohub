const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';
const SELECTED_GOAL = 'SELECTED_GOAL';
const EDIT_GOAL = 'EDIT_GOAL';
const TOGGLE_GOAL = 'TOGGLE_GOAL';
const SET_CALENDAR_DATE = 'SET_CALENDAR_DATE';
const SET_SELECTED_DATE = 'SET_SELECTED_DATE';

export interface IGoal {
  id: number;
  goal: string;
  notes: string;
  month: number;
  checked: boolean;
  year: number;
}

export interface IEditGoal {
  id: number;
  body: {
    goal: string;
    notes: string;
  };
}

export interface IState {
  goals: IGoal[];
  selectedGoal: IGoal | null;
  calendarDate: string;
  selectedDate: string;
}

interface AddGoalAction {
  type: typeof ADD_GOAL;
  payload: IGoal;
}

interface RemoveGoalAction {
  type: typeof REMOVE_GOAL;
  payload: number;
}

interface EditGoalAction {
  type: typeof EDIT_GOAL;
  payload: IEditGoal;
}

interface ToggleGoal {
  type: typeof TOGGLE_GOAL;
  payload: number;
}

interface SelectedGoal {
  type: typeof SELECTED_GOAL;
  payload: IGoal | null;
}

interface SetCalendarDate {
  type: typeof SET_CALENDAR_DATE;
  payload: string;
}

interface SetSelectedDate {
  type: typeof SET_SELECTED_DATE;
  payload: string;
}

export type Actions =
  | AddGoalAction
  | RemoveGoalAction
  | EditGoalAction
  | ToggleGoal
  | SelectedGoal
  | SetCalendarDate
  | SetSelectedDate;