import { IState, Actions, IGoal, IEditGoal } from './types';

export const InitialState: IState = {
  goals: [],
  selectedGoal: null,
  calendarDate: '',
  selectedDate: '',
};

export default (state = InitialState, action: Actions): IState => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_GOAL':
      return {
        ...state,
        goals: [...state.goals, payload as IGoal],
      };

    case 'EDIT_GOAL': {
      const { id, body } = payload as IEditGoal;
      return {
        ...state,
        goals: state.goals.map((el) =>
          el.id === id ? { ...el, goal: body.goal, notes: body.notes } : el
        ),
      };
    }
    case 'REMOVE_GOAL':
      return {
        ...state,
        goals: state.goals.filter((el) => el.id !== (payload as number)),
      };
    case 'TOGGLE_GOAL':
      return {
        ...state,
        goals: state.goals.map((el) =>
          el.id === (payload as number) ? { ...el, checked: !el.checked } : el
        ),
      };

    case 'SELECTED_GOAL':
      return { ...state, selectedGoal: payload as IGoal | null };

    case 'SET_CALENDAR_DATE':
      return {
        ...state,
        calendarDate: payload as string,
      };
    case 'SET_SELECTED_DATE':
      return {
        ...state,
        selectedDate: payload as string,
      };
    default:
      return state;
  }
};
