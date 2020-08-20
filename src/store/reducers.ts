import {
  IState,
  Actions,
  IGoal,
  IEditGoal,
  ITask,
  IEditTAsk,
  IModal,
  ISettings,
} from './types';

export const InitialState: IState = {
  goals: [],
  tasks: [],
  selectedGoal: null,
  selectedTask: null,
  calendarDate: '',
  selectedDate: '',
  modal: undefined,
  settings: {
    name: '###',
  },
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

    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, payload as ITask],
      };
    case 'EDIT_TASK': {
      const { body, id } = payload as IEditTAsk;
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === id ? { ...el, ...body } : el
        ),
      };
    }
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== (payload as number)),
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === (payload as number) ? { ...el, checked: !el.checked } : el
        ),
      };

    case 'SELECTED_TASK':
      return {
        ...state,
        selectedTask: payload as ITask,
      };

    case 'SHOW_MODAL':
      return {
        ...state,
        modal: payload as IModal,
      };
    case 'HIDE_MODAL':
      return {
        ...state,
        modal: null,
      };
    case 'UPDATE_SETTINGS':
      return { ...state, settings: payload as ISettings };
    default:
      return state;
  }
};
