import React from 'react';
import Icon from '../Icon';
import useCalendar from '../../hooks/useCalendar';
import {
  CalendarContainer,
  CalendarHeader,
  CalendarMonth,
  CalendarDays,
  CalendarDayBox,
  CalendarDayName,
  IconBtn,
} from './Calendar.styles';

const Calendar: React.FC = () => {
  const {
    calendar,
    handleDayBoxClick,
    handleNextMonthClick,
    handlePrevMonthClick,
    generateKey,
    selectedDate,
  } = useCalendar();

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
            selected={generateKey('prev', el) === selectedDate.key}
            opacity
          >
            {el}
          </CalendarDayBox>
        ))}
        {calendar.this.map((el) => (
          <CalendarDayBox
            curr={el === calendar.currentDay}
            onClick={() => handleDayBoxClick('curr', el)}
            selected={generateKey('curr', el) === selectedDate.key}
          >
            {el}
          </CalendarDayBox>
        ))}
        {calendar.next.map((el) => (
          <CalendarDayBox
            onClick={() => handleDayBoxClick('next', el)}
            selected={generateKey('next', el) === selectedDate.key}
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
