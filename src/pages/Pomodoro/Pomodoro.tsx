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

const Pomodoro: React.FC = () => {
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
          <TimerTitle>Pomodoro</TimerTitle>
          <Timer>10:00</Timer>
        </TimerContainer>
        <PomodoroActions>
          <PomodoroReset>
            1/4
            <span>Reset</span>
          </PomodoroReset>
          <PlayButton>
            <Icon name='play' />
          </PlayButton>
        </PomodoroActions>
      </PomodoroContent>
    </PomodoroContainer>
  );
};

export default Pomodoro;
