import { Actions, IGoal, IEditGoal } from './types';

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
