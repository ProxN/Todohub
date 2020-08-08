import { useState, useContext, useEffect } from 'react';
import dayjs from 'dayjs';
import { Context } from '../context/app.context';
import { setCalendarDate as setDate, setSelectedDate } from '../store/actions';
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
  const [dateKey, setDateKey] = useState('');
  const { state, dispatch } = useContext(Context);
  const { calendarDate, selectedDate } = state;

  useEffect(() => {
    dispatch(setDate(date.format('MM-DD-YYYY')));
  }, [dispatch]);

  const calendar = getCalendar(calendarDate);
  const month = getMonth(calendarDate);
  const year = getYear(calendarDate);

  const handleNextMonthClick = (): void => {
    const nextDate = date.add(1, 'month');
    date = dayjs(nextDate);
    dispatch(setDate(date.format('MM-DD-YYYY')));
  };

  const handlePrevMonthClick = (): void => {
    const nextDate = date.subtract(1, 'month');
    date = dayjs(nextDate);
    dispatch(setDate(date.format('MM-DD-YYYY')));
  };

  const handleDayBoxClick = (type: string, day: number): void => {
    if (type === 'prev') {
      const prevSelected = dayjs(calendarDate)
        .subtract(1, 'month')
        .set('date', day)
        .format('MM-DD-YYYY');

      dispatch(setSelectedDate(prevSelected));
      setDateKey(`p${day}-${month + -1}-${year}`);
    } else if (type === 'curr') {
      dispatch(setSelectedDate(calendarDate));

      setDateKey(`c${day}-${month}-${year}`);
    } else if (type === 'next') {
      const nextSelected = dayjs(calendarDate)
        .add(1, 'month')
        .set('date', day)
        .format('MM-DD-YYYY');

      dispatch(setSelectedDate(nextSelected));
      setDateKey(`n${day}-${month + 1}-${year}`);
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
    selectedDate: { date: selectedDate, key: dateKey },
    generateKey,
    handleDayBoxClick,
    handleNextMonthClick,
    handlePrevMonthClick,
  };
};

export default useCalendar;
