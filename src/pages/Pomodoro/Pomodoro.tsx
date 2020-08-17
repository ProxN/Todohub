import React from 'react';
import {
  PomodoroContainer,
  PomodoroContent,
  SettingsButton,
  TimerContainer,
  TimerTitle,
  Timer,
  PomodoroActions,
  PomodoroReset,
  PlayButton,
  VolumeButton,
} from './Pomodoro.styles';
import Icon from '../../components/Icon';
import useTimer from '../../hooks/useTimer';

// const leadingZero = (num: number): string | number => {
//   return num < 10 ? `0${num}` : num;
// };

const Pomodoro: React.FC = () => {
  const { state, StartTimer, StopTimer } = useTimer();

  const { isRunning, count, cycle, settings } = state;
  return (
    <PomodoroContainer>
      <PomodoroContent>
        <PomodoroActions>
          <VolumeButton>
            <Icon name='volume' />
          </VolumeButton>
          <SettingsButton>
            <Icon name='settings' />
          </SettingsButton>
        </PomodoroActions>
        <TimerContainer>
          <TimerTitle>{cycle}</TimerTitle>
          <Timer>{state.timerDisplay}</Timer>
        </TimerContainer>
        <PomodoroActions>
          <PomodoroReset>
            {count}/{settings.rounds}
            <span>Reset</span>
          </PomodoroReset>
          <PlayButton onClick={!isRunning ? StartTimer : StopTimer}>
            <Icon name={isRunning ? 'pause' : 'play'} />
          </PlayButton>
        </PomodoroActions>
      </PomodoroContent>
    </PomodoroContainer>
  );
};

export default Pomodoro;
