import dayjs from 'dayjs';
import { IGoal } from '../store/types';

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

export { getCurrentMonthGoals };
