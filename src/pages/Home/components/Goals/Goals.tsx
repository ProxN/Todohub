import React, { useContext } from 'react';
import Icon from '../../../../components/Icon';
import Goal from '../Goal/Goal';
import { Context } from '../../../../context/app.context';
import AddGoal from '../AddGoal/AddGoal';
import useFormToggle from '../../../../hooks/useFormToggle';
import GetMonth from '../../../../helpers/getMonth';
import { getCurrentMonthGoals } from '../../../../helpers/helpersFunc';
import {
  GoalsContainer,
  GoalsHeader,
  GoalsTitle,
  AddGoalButton,
  GoalsList,
  EmptyGoals,
} from './Goals.styles';

const Goals: React.FC = () => {
  const { state } = useContext(Context);
  const { handleClose, handleOpen, isOpen } = useFormToggle();

  return (
    <>
      <GoalsContainer>
        <GoalsHeader>
          <GoalsTitle>
            {GetMonth(7)}
            &nbsp;Goals
          </GoalsTitle>
          <AddGoalButton onClick={handleOpen}>
            <Icon name='plus' />
          </AddGoalButton>
        </GoalsHeader>
        <GoalsList>
          {state.goals.length > 0 ? (
            getCurrentMonthGoals(state.goals, state.calendarDate).map((el) => (
              <Goal data={el} key={el.id} />
            ))
          ) : (
            <EmptyGoals onClick={handleOpen}>Add New Goals.</EmptyGoals>
          )}
        </GoalsList>
      </GoalsContainer>
      {(isOpen || state.selectedGoal) && <AddGoal onClose={handleClose} />}
    </>
  );
};

export default Goals;
