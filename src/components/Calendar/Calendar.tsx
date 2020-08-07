import React, { useState } from 'react';
import dayjs from 'dayjs';
import getCalendar from '../../helpers/getCalendar';
import {
  CalendarContainer,
  CalendarHeader,
  CalendarMonth,
  CalendarDays,
  CalendarDayBox,
  CalendarDayName,
  IconBtn,
} from './Calendar.styles';
import Icon from '../Icon';

let date = dayjs();

const Calendar: React.FC = () => {
  const [calendarDate, setCalendarDate] = useState(date.format('MM-DD-YYYY'));
  const [selectedDate, setSelectedDate] = useState({ date: '', key: '' });
  const calendar = getCalendar(calendarDate);

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

  const getMonth = (): number => {
    return dayjs(calendarDate).get('month');
  };
  const getYear = (): number => {
    return dayjs(calendarDate).get('year');
  };

  const handleDayBoxClick = (type: string, day: number): void => {
    if (type === 'prev') {
      const prevSelected = dayjs(calendarDate)
        .subtract(1, 'month')
        .set('date', day)
        .format('MM-DD-YYYY');
      setSelectedDate({
        date: prevSelected,
        key: `p${day}-${getMonth() - 1}-${getYear()}`,
      });
    } else if (type === 'curr') {
      setSelectedDate({
        date: calendarDate,
        key: `c${day}-${getMonth()}-${getYear()}`,
      });
    } else if (type === 'next') {
      const nextSelected = dayjs(calendarDate)
        .add(1, 'month')
        .set('date', day)
        .format('MM-DD-YYYY');
      setSelectedDate({
        date: nextSelected,
        key: `n${day}-${getMonth() + 1}-${getYear()}`,
      });
    }
  };

  return (
    <CalendarContainer>
      <CalendarHeader>
        <IconBtn onClick={handlePrevMonthClick}>
          <Icon name='arrowBack' size='sm' />
        </IconBtn>
        <CalendarMonth>
          {calendar.month}, &nbsp;{calendar.year}
        </CalendarMonth>
        <IconBtn onClick={handleNextMonthClick}>
          <Icon name='arrowNext' size='sm' />
        </IconBtn>
      </CalendarHeader>
      <CalendarDays>
        <CalendarDayName>Sun</CalendarDayName>
        <CalendarDayName>Mon</CalendarDayName>
        <CalendarDayName>Tue</CalendarDayName>
        <CalendarDayName>Wed</CalendarDayName>
        <CalendarDayName>Thu</CalendarDayName>
        <CalendarDayName>Fri</CalendarDayName>
        <CalendarDayName>Sat</CalendarDayName>
        {calendar.prev.map((el) => (
          <CalendarDayBox
            onClick={() => handleDayBoxClick('prev', el)}
            selected={
              `p${el}-${getMonth() - 1}-${getYear()}` === selectedDate.key
            }
            opacity
          >
            {el}
          </CalendarDayBox>
        ))}
        {calendar.this.map((el) => (
          <CalendarDayBox
            curr={el === calendar.currentDay}
            onClick={() => handleDayBoxClick('curr', el)}
            selected={`c${el}-${getMonth()}-${getYear()}` === selectedDate.key}
          >
            {el}
          </CalendarDayBox>
        ))}
        {calendar.next.map((el) => (
          <CalendarDayBox
            onClick={() => handleDayBoxClick('next', el)}
            selected={
              `n${el}-${getMonth() + 1}-${getYear()}` === selectedDate.key
            }
            opacity
          >
            {el}
          </CalendarDayBox>
        ))}
      </CalendarDays>
    </CalendarContainer>
  );
};

export default Calendar;
