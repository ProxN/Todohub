import { Actions, IGoal, IEditGoal, ITask, IEditTAsk, IModal } from './types';

export const addGoal = (Goal: IGoal): Actions => {
  return {
    type: 'ADD_GOAL',
    payload: Goal,
  };
};

export const removeGoal = (id: number): Actions => {
  return {
    type: 'REMOVE_GOAL',
    payload: id,
  };
};

export const editGoal = (data: IEditGoal): Actions => {
  return {
    type: 'EDIT_GOAL',
    payload: data,
  };
};

export const toggleGoal = (id: number): Actions => {
  return {
    type: 'TOGGLE_GOAL',
    payload: id,
  };
};

export const setEditGoal = (goal: IGoal | null): Actions => {
  return {
    type: 'SELECTED_GOAL',
    payload: goal,
  };
};

export const setCalendarDate = (date: string): Actions => {
  return {
    type: 'SET_CALENDAR_DATE',
    payload: date,
  };
};

export const setSelectedDate = (date: string): Actions => {
  return {
    type: 'SET_SELECTED_DATE',
    payload: date,
  };
};

export const addTask = (task: ITask): Actions => {
  return {
    type: 'ADD_TASK',
    payload: task,
  };
};

export const editTask = (data: IEditTAsk): Actions => {
  return {
    type: 'EDIT_TASK',
    payload: data,
  };
};

export const toggleTask = (id: number): Actions => {
  return {
    type: 'TOGGLE_TASK',
    payload: id,
  };
};

export const removeTask = (id: number): Actions => {
  return {
    type: 'REMOVE_TASK',
    payload: id,
  };
};

export const setSeelctedTask = (task: ITask | null): Actions => {
  return {
    type: 'SELECTED_TASK',
    payload: task,
  };
};

export const showModal = (Modal: IModal): Actions => {
  return {
    type: 'SHOW_MODAL',
    payload: Modal,
  };
};

export const HideModal = (): Actions => {
  return {
    type: 'HIDE_MODAL',
    payload: null,
  };
};
