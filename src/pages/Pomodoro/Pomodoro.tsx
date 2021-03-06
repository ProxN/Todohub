import React, { useContext } from 'react';
import { Context } from '../../context/app.context';
import { showModal, HideModal } from '../../store/actions';
import Icon from '../../components/Icon';
import useTimer from '../../hooks/useTimer';
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
  ResetBtn,
} from './Pomodoro.styles';
import Modal from '../../components/Modal/Modal';
import Settings from './components/Settings/Settings';

const Pomodoro: React.FC = () => {
  const {
    state,
    StartTimer,
    StopTimer,
    Reset,
    ToggleSound,
    UpdateTimerSettings,
  } = useTimer();
  const {
    state: { modal },
    dispatch,
  } = useContext(Context);

  const { isRunning, count, cycle, settings, notification } = state;

  const handleHideModal = (): void => {
    dispatch(HideModal());
  };

  const handleSettingsClick = (): void => {
    dispatch(
      showModal({
        body: (
          <Settings
            settings={settings}
            hideModal={handleHideModal}
            updateSettingsHandler={UpdateTimerSettings}
          />
        ),
        title: 'Timer Settings',
        isOpen: true,
        modalType: 'default',
      })
    );
  };

  return (
    <>
      <section>
        <PomodoroContainer>
          <PomodoroContent>
            <PomodoroActions>
              <VolumeButton onClick={ToggleSound}>
                <Icon name={notification ? 'volume' : 'mute'} />
              </VolumeButton>
              <SettingsButton onClick={handleSettingsClick}>
                <Icon name='settings' />
              </SettingsButton>
            </PomodoroActions>
            <TimerContainer>
              <TimerTitle cycle={cycle}>{cycle}</TimerTitle>
              <Timer>{state.timerDisplay}</Timer>
            </TimerContainer>
            <PomodoroActions>
              <PomodoroReset>
                {count}/{settings.rounds}
                <ResetBtn onClick={Reset}>Reset</ResetBtn>
              </PomodoroReset>
              <PlayButton onClick={!isRunning ? StartTimer : StopTimer}>
                <Icon name={isRunning ? 'pause' : 'play'} />
              </PlayButton>
            </PomodoroActions>
          </PomodoroContent>
        </PomodoroContainer>
      </section>
      {modal?.isOpen && <Modal />}
    </>
  );
};

export default Pomodoro;
