import React, { useContext } from 'react';
import { Context } from '../../context/app.context';
import { UpdateSettings } from '../../store/actions';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import { SettingsContent, LeftPanel, PanelActions } from './Settings.styles';

const Settings: React.FC = () => {
  const { dispatch } = useContext(Context);
  const onSubmit = (): void => {
    dispatch(UpdateSettings(values));
  };

  const { values, handleChange, handleSubmit } = useForm(onSubmit, {
    name: '',
  });
  return (
    <section>
      <SettingsContent>
        <LeftPanel>
          <form onSubmit={handleSubmit}>
            <Input
              label='Name'
              name='name'
              onChange={handleChange}
              fullWidth
              placeholder='Your name'
            />
            <PanelActions>
              <Button variant='primary'>Save</Button>
            </PanelActions>
          </form>
        </LeftPanel>
      </SettingsContent>
    </section>
  );
};

export default Settings;
