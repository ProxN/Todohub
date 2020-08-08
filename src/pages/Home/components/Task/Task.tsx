import React, { useContext } from 'react';
import { Context } from '../../../../context/app.context';
import { setSeelctedTask, toggleTask } from '../../../../store/actions';
import Checkbox from '../../../../components/Checkbox';
import { ITask } from '../../../../store/types';
import {
  TaskBox,
  TaskContent,
  TaskTime,
  TaskName,
  TaskNotes,
} from './Task.styles';

interface Props {
  data: ITask;
}

const Task: React.FC<Props> = ({ data }) => {
  const { dispatch } = useContext(Context);

  const handleCheckboxChange = (
    e: React.MouseEvent<HTMLLabelElement>
  ): void => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleTask(data.id));
  };

  const handleTaskClick = (): void => {
    dispatch(setSeelctedTask(data));
  };
  return (
    <TaskBox onClick={handleTaskClick}>
      <Checkbox checked={data.checked} onChange={handleCheckboxChange} />
      <TaskContent>
        <TaskName>
          {data.task}
          {data.start && (
            <TaskTime>
              {data.start}
              &nbsp;-&nbsp;
              {data.end}
            </TaskTime>
          )}
        </TaskName>
        {data.notes && <TaskNotes>{data.notes}</TaskNotes>}
      </TaskContent>
    </TaskBox>
  );
};

export default Task;
