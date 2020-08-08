import React, { useContext } from 'react';
import Form from '../../../../components/Form';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import useForm from '../../../../hooks/useForm';
import {
  addGoal,
  setEditGoal,
  editGoal,
  removeGoal,
} from '../../../../store/actions';
import { Context } from '../../../../context/app.context';

interface Props {
  onClose: () => void;
}

const AddGoal: React.FC<Props> = ({ onClose }) => {
  const { state, dispatch } = useContext(Context);

  const handleClose = (): void => {
    if (state.selectedGoal) {
      dispatch(setEditGoal(null));
    }
    onClose();
  };
  const onSubmit = (): void => {
    if (state.selectedGoal) {
      dispatch(
        editGoal({
          id: state.selectedGoal.id,
          body: values,
        })
      );
    } else {
      dispatch(
        addGoal({
          goal: values.goal,
          notes: values.notes,
          id: Date.now(),
          checked: false,
          month: new Date().getMonth(),
          year: new Date().getFullYear(),
        })
      );
    }
    handleClose();
  };

  const handleGoalDelete = (): void => {
    if (state.selectedGoal) {
      dispatch(removeGoal(state.selectedGoal.id));
      handleClose();
    }
  };

  const { values, handleChange, handleSubmit } = useForm(onSubmit, {
    goal: state.selectedGoal?.goal || '',
    notes: state.selectedGoal?.notes || '',
  });
  return (
    <Form
      onClose={handleClose}
      heading={state.selectedGoal ? 'Edit Goal' : 'Add Goal'}
    >
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='New Goal...'
          fullWidth
          name='goal'
          label='Goal'
          value={values.goal}
          onChange={handleChange}
        />
        <Input
          type='text'
          placeholder='Goal Notes...'
          fullWidth
          name='notes'
          label='Notes'
          textarea
          value={values.notes}
          onChange={handleChange}
        />
        <div style={{ display: 'flex' }}>
          {state.selectedGoal && (
            <Button variant='default' size='md' onClick={handleGoalDelete}>
              Delete
            </Button>
          )}
          <Button
            fullWidth
            variant='primary'
            size='md'
            disabled={!values.goal && !state.selectedGoal}
          >
            {state.selectedGoal ? 'Edit Goal' : 'Add Goal'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddGoal;
