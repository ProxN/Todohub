import dayjs from 'dayjs';
import getMonth from './getMonth';

export interface ICalendar {
  prev: number[];
  this: number[];
  next: number[];
  currentDay: number;
  month: string;
  year: number;
}

const getCalendar = (dateString: string): ICalendar => {
  const calendar: ICalendar = {
    prev: [],
    this: [],
    next: [],
    currentDay: 0,
    month: '',
    year: 0,
  };

  const date = dayjs(dateString);

  const totalDays = date.daysInMonth();
  const firstDayIndex = date.startOf('month').day();
  const lastDayIndex = date.endOf('month').day();
  const lastDayOfPrevMonth = date.subtract(1, 'month').endOf('month').date();

  const nextdays = 7 - lastDayIndex - 1;

  for (let i = 1; i <= totalDays; i += 1) {
    calendar.this.push(i);
  }

  for (let i = firstDayIndex; i > 0; i -= 1) {
    const prevDay = lastDayOfPrevMonth - i + 1;
    calendar.prev.push(prevDay);
  }

  for (let i = 1; i <= nextdays; i += 1) {
    calendar.next.push(i);
  }

  if (dateString === dayjs().format('YYYY-MM-DD')) {
    calendar.currentDay = dayjs().date();
  }

  calendar.month = getMonth(date.month());
  calendar.year = date.year();

  return calendar;
};

export default getCalendar;
