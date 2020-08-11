import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { ClockBox, ClockText } from './Clock.styles';

const Clock: React.FC = () => {
  const [time, setTime] = useState(dayjs().format('hh:mm A'));
  useEffect(() => {
    const interval = setInterval(() => {
      const timer = dayjs().format('hh:mm A');
      setTime(timer);
    }, [1000]);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <ClockBox>
      <ClockText>{time}</ClockText>
    </ClockBox>
  );
};

export default Clock;
