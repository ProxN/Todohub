import dayjs from 'dayjs';
import getMonth from './getMonth';

/**
 * Get The First day of the month
 * Get The Last Day Of Prev month
 * Get The First day of next month
 *
 */
interface ICalendar {
  prev: number[];
  this: number[];
  next: number[];
  currentDay: number;
  month: string;
  year: number;
}

// let date = dayjs();

// const getCalendar = (month: number, year: number): ICalendar => {
//   const calendar: ICalendar = {
//     prev: [],
//     this: [],
//     next: [],
//     currentDay: 0,
//     month: '',
//   };

//   date = date.set('month', month);
//   date = date.set('year', year);

//   const totalDays = date.daysInMonth();
//   const firstDayIndex = date.startOf('month').day();
//   const lastDayIndex = date.endOf('month').day();
//   const lastDayOfPrevMonth = date.subtract(1, 'month').endOf('month').date();

//   const nextdays = 7 - lastDayIndex - 1;

//   for (let i = 1; i <= totalDays; i += 1) {
//     calendar.this.push(i);
//   }

//   for (let i = firstDayIndex; i > 0; i -= 1) {
//     const prevDay = lastDayOfPrevMonth - i + 1;
//     calendar.prev.push(prevDay);
//   }

//   for (let i = 1; i <= nextdays; i += 1) {
//     calendar.next.push(i);
//   }

//   if (dayjs().month() === month && year === dayjs().year()) {
//     calendar.currentDay = dayjs().date();
//   }
//   calendar.month = getMonth(month);

//   return calendar;
// };

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

  if (dateString === dayjs().format('MM-DD-YYYY')) {
    calendar.currentDay = dayjs().date();
  }

  calendar.month = getMonth(date.month());
  calendar.year = date.year();

  return calendar;
};

export default getCalendar;
