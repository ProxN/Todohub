import React, { useContext } from 'react';
import { Context } from '../../../../context/app.context';
import Icon from '../../../../components/Icon';
import Task from '../Task/Task';
import {
  TasksContainer,
  TasksHeader,
  TasksHeading,
  TaskSubHeading,
  AddTaskButton,
  TasksList,
  Emptytasks,
} from './Tasks.styles';
import useFormToggle from '../../../../hooks/useFormToggle';
import AddTask from '../AddTask/AddTask';
import { getCurrentTasks } from '../../../../helpers/helpersFunc';

const Tasks: React.FC = () => {
  const { state } = useContext(Context);
  const { handleClose, handleOpen, isOpen } = useFormToggle();

  return (
    <>
      <TasksContainer>
        <TasksHeader>
          <TasksHeading>
            Today&apos;s schedule
            <TaskSubHeading>Thursday 11</TaskSubHeading>
          </TasksHeading>
          <AddTaskButton onClick={handleOpen}>
            <Icon name='plus' />
          </AddTaskButton>
        </TasksHeader>
        <TasksList>
          {state.tasks.length > 0 ? (
            getCurrentTasks(state.tasks, state.selectedDate).map((el) => (
              <Task data={el} />
            ))
          ) : (
            <Emptytasks>Add New Task</Emptytasks>
          )}
        </TasksList>
      </TasksContainer>
      {(isOpen || state.selectedTask) && <AddTask onClose={handleClose} />}
    </>
  );
};

export default Tasks;
