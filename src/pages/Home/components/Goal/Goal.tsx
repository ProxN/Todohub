import React, { useContext } from 'react';
import { toggleGoal, setEditGoal } from '../../../../store/goal/actions';
import { IGoal } from '../../../../store/goal/types';
import Checkbox from '../../../../components/Checkbox';
import { Context } from '../../../../context/app.context';
import { GoalBox, GoalNotes, GoalContent, GoalText } from './Goal.styles';

interface Props {
  data: IGoal;
}

const Goal: React.FC<Props> = ({ data }) => {
  const { dispatch } = useContext(Context);

  const handleCheckboxChange = (
    e: React.MouseEvent<HTMLLabelElement>
  ): void => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleGoal(data.id));
  };

  const handleBoxClick = (): void => {
    dispatch(setEditGoal(data));
  };
  return (
    <GoalBox onClick={handleBoxClick}>
      <Checkbox checked={data.checked} onChange={handleCheckboxChange} />
      <GoalContent>
        <GoalText>{data.goal}</GoalText>
        {data.notes && <GoalNotes>{data.notes}</GoalNotes>}
      </GoalContent>
    </GoalBox>
  );
};

export default Goal;
