import dayjs from 'dayjs';
import { IGoal, ITask } from '../store/types';

const getCurrentMonthGoals = (goals: IGoal[], date: string): IGoal[] => {
  const month = dayjs(date).month();
  const year = dayjs(date).year();
  const results: IGoal[] = [];

  goals.forEach((el) => {
    if (el.month === month && el.year === year) {
      results.push(el);
    }
  });

  return results;
};

const getCurrentTasks = (tasks: ITask[], date: string): ITask[] => {
  const results: ITask[] = [];

  tasks.forEach((el) => {
    if (el.date === date) results.push(el);
  });

  return results;
};
export { getCurrentMonthGoals, getCurrentTasks };
