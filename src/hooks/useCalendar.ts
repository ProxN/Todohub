import { useState } from 'react';
import dayjs from 'dayjs';
import getCalendar, { ICalendar } from '../helpers/getCalendar';

let date = dayjs();

const getMonth = (d: string): number => {
  return dayjs(d).get('month');
};
const getYear = (d: string): number => {
  return dayjs(d).get('year');
};

interface IUseCalendar {
  calendar: ICalendar;
  selectedDate: { date: string; key: string };
  handleNextMonthClick: () => void;
  handlePrevMonthClick: () => void;
  handleDayBoxClick: (type: string, day: number) => void;
  generateKey: (type: string, day: number) => string;
}

const useCalendar = (): IUseCalendar => {
  const [calendarDate, setCalendarDate] = useState(date.format('MM-DD-YYYY'));
  const [selectedDate, setSelectedDate] = useState({ date: '', key: '' });

  const calendar = getCalendar(calendarDate);
  const month = getMonth(calendarDate);
  const year = getYear(calendarDate);

  const handleNextMonthClick = (): void => {
    const nextDate = date.add(1, 'month');
    date = dayjs(nextDate);
    setCalendarDate(date.format('MM-DD-YYYY'));
  };

  const handlePrevMonthClick = (): void => {
    const nextDate = date.subtract(1, 'month');
    date = dayjs(nextDate);
    setCalendarDate(date.format('MM-DD-YYYY'));
  };

  const handleDayBoxClick = (type: string, day: number): void => {
    if (type === 'prev') {
      const prevSelected = dayjs(calendarDate)
        .subtract(1, 'month')
        .set('date', day)
        .format('MM-DD-YYYY');
      setSelectedDate({
        date: prevSelected,
        key: `p${day}-${month - 1}-${year}`,
      });
    } else if (type === 'curr') {
      setSelectedDate({
        date: calendarDate,
        key: `c${day}-${month}-${year}`,
      });
    } else if (type === 'next') {
      const nextSelected = dayjs(calendarDate)
        .add(1, 'month')
        .set('date', day)
        .format('MM-DD-YYYY');
      setSelectedDate({
        date: nextSelected,
        key: `n${day}-${month + 1}-${year}`,
      });
    }
  };

  const generateKey = (type: string, day: number): string => {
    let key = '';

    if (type === 'prev') {
      key = `p${day}-${month - 1}-${year}`;
    } else if (type === 'curr') {
      key = `c${day}-${month}-${year}`;
    } else if (type === 'next') {
      key = `n${day}-${month + 1}-${year}`;
    }
    return key;
  };

  return {
    calendar,
    selectedDate,
    generateKey,
    handleDayBoxClick,
    handleNextMonthClick,
    handlePrevMonthClick,
  };
};

export default useCalendar;
