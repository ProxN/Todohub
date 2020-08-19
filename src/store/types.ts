const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';
const SELECTED_GOAL = 'SELECTED_GOAL';
const EDIT_GOAL = 'EDIT_GOAL';
const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const SELECTED_TASK = 'SELECTED_TASK';
const TOGGLE_GOAL = 'TOGGLE_GOAL';
const SET_CALENDAR_DATE = 'SET_CALENDAR_DATE';
const SET_SELECTED_DATE = 'SET_SELECTED_DATE';
const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

export interface IGoal {
  id: number;
  goal: string;
  notes: string;
  month: number;
  checked: boolean;
  year: number;
}

export interface ITask {
  id: number;
  task: string;
  notes: string;
  start: string;
  end: string;
  date: string;
  checked: boolean;
}

export interface IEditGoal {
  id: number;
  body: {
    goal: string;
    notes: string;
  };
}

export interface IEditTAsk {
  id: number;
  body: {
    task: string;
    notes: string;
    start: string;
    end: string;
  };
}

export interface IModal {
  body: string | React.ReactElement;
  modalType: 'default' | 'delete';
  isOpen: boolean;
  title: string;
}

export interface IState {
  goals: IGoal[];
  tasks: ITask[];
  selectedGoal: IGoal | null;
  selectedTask: ITask | null;
  calendarDate: string;
  selectedDate: string;
  modal?: IModal | null;
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

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: ITask;
}

interface EditTaskAction {
  type: typeof EDIT_TASK;
  payload: IEditTAsk;
}

interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  payload: number;
}
interface ToggleTaskAction {
  type: typeof TOGGLE_TASK;
  payload: number;
}

interface SelectedTask {
  type: typeof SELECTED_TASK;
  payload: ITask | null;
}

interface ShowModal {
  type: typeof SHOW_MODAL;
  payload: IModal | null;
}

interface HideModal {
  type: typeof HIDE_MODAL;
  payload: null;
}

export type Actions =
  | AddGoalAction
  | RemoveGoalAction
  | EditGoalAction
  | ToggleGoal
  | SelectedGoal
  | SetCalendarDate
  | SetSelectedDate
  | AddTaskAction
  | EditTaskAction
  | RemoveTaskAction
  | ToggleTaskAction
  | SelectedTask
  | ShowModal
  | HideModal;
