import React, { useContext } from 'react';
import { Context } from '../../../../context/app.context';
import Icon from '../../../../components/Icon';
import Task from '../Task/Task';
import useFormToggle from '../../../../hooks/useFormToggle';
import AddTask from '../AddTask/AddTask';
import { getCurrentTasks, getDay } from '../../../../helpers/helpersFunc';
import {
  TasksContainer,
  TasksHeader,
  TasksHeading,
  TaskSubHeading,
  AddTaskButton,
  TasksList,
  EmptyTasks,
} from './Tasks.styles';

const Tasks: React.FC = () => {
  const { state } = useContext(Context);
  const { handleClose, handleOpen, isOpen } = useFormToggle();

  const day = getDay(state.selectedDate);
  return (
    <>
      <TasksContainer>
        <TasksHeader>
          <TasksHeading>
            Today&apos;s schedule
            <TaskSubHeading>
              {day.name} {day.day}
            </TaskSubHeading>
          </TasksHeading>
          <AddTaskButton onClick={handleOpen}>
            <Icon name='plus' />
          </AddTaskButton>
        </TasksHeader>
        <TasksList>
          {getCurrentTasks(state.tasks, state.selectedDate).length > 0 ? (
            getCurrentTasks(state.tasks, state.selectedDate).map((el) => (
              <Task data={el} />
            ))
          ) : (
            <EmptyTasks>Add New Task</EmptyTasks>
          )}
        </TasksList>
      </TasksContainer>
      {(isOpen || state.selectedTask) && <AddTask onClose={handleClose} />}
    </>
  );
};

export default Tasks;
