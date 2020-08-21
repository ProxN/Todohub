import React from 'react';
import { TimerSettings } from '../../../../types/timer.types';
import useForm from '../../../../hooks/useForm';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

interface Props {
  settings: TimerSettings;
  updateSettingsHandler: (timerSettings: TimerSettings) => void;
  hideModal: () => void;
}

const Settings: React.FC<Props> = ({
  settings,
  updateSettingsHandler,
  hideModal,
}) => {
  const onSubmit = (): void => {
    updateSettingsHandler(values);
    hideModal();
  };
  const { values, handleChange, handleSubmit } = useForm(onSubmit, {
    ...settings,
  });
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='Work'
        type='number'
        name='work'
        min='1'
        max='90'
        fullWidth
        value={values.work}
        onChange={handleChange}
      />
      <Input
        label='Short Break'
        type='number'
        name='shortBreak'
        min='1'
        max='90'
        fullWidth
        value={values.shortBreak}
        onChange={handleChange}
      />
      <Input
        label='Long Break'
        type='number'
        name='longBreak'
        min='1'
        max='90'
        fullWidth
        value={values.longBreak}
        onChange={handleChange}
      />
      <Input
        label='Rounds'
        type='text'
        name='rounds'
        min='1'
        max='12'
        fullWidth
        value={values.rounds}
        onChange={handleChange}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant='primary'>Save</Button>
      </div>
    </form>
  );
};

export default Settings;
