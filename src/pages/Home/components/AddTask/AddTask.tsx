import React, { useContext } from 'react';
import { Context } from '../../../../context/app.context';
import Form from '../../../../components/Form';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import useForm from '../../../../hooks/useForm';
import {
  addTask,
  setSeelctedTask,
  editTask,
  removeTask,
} from '../../../../store/actions';

interface Props {
  onClose: () => void;
}

const AddTask: React.FC<Props> = ({ onClose }) => {
  const { state, dispatch } = useContext(Context);

  const { selectedTask } = state;
  const handleClose = (): void => {
    if (state.selectedTask) {
      console.log('test');
      dispatch(setSeelctedTask(null));
    }
    onClose();
  };
  const onSubmit = (): void => {
    if (selectedTask) {
      dispatch(
        editTask({
          id: selectedTask.id,
          body: values,
        })
      );
    } else {
      dispatch(
        addTask({
          id: Date.now(),
          date: state.calendarDate,
          checked: false,
          ...values,
        })
      );
    }
    handleClose();
  };

  const handleTaskDelete = (): void => {
    if (selectedTask) {
      dispatch(removeTask(selectedTask.id));
      handleClose();
    }
  };

  const { values, handleChange, handleSubmit } = useForm(onSubmit, {
    task: selectedTask?.task || '',
    notes: selectedTask?.notes || '',
    start: selectedTask?.start || '',
    end: selectedTask?.end || '',
  });
  return (
    <Form
      heading={selectedTask ? 'Edit Task' : 'Add new Task'}
      onClose={handleClose}
    >
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='New Task...'
          fullWidth
          name='task'
          label='Task'
          value={values.task}
          onChange={handleChange}
        />
        <Input
          type='text'
          placeholder='Task Notes...'
          fullWidth
          name='notes'
          label='Notes'
          textarea
          value={values.notes}
          onChange={handleChange}
        />
        <Input
          type='time'
          name='start'
          fullWidth
          label='Start Time'
          value={values.start}
          onChange={handleChange}
        />
        <Input
          type='time'
          name='end'
          fullWidth
          label='End Time'
          value={values.end}
          onChange={handleChange}
        />
        <div style={{ display: 'flex' }}>
          {selectedTask && (
            <Button variant='default' size='md' onClick={handleTaskDelete}>
              Delete
            </Button>
          )}
          <Button fullWidth size='md' variant='primary'>
            {selectedTask ? 'Edit Task' : 'Add Task'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddTask;
