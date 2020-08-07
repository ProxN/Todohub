import styled, { css } from 'styled-components';

export const GoalsContainer = styled.div`
  max-height: 100%;
  overflow: hidden;
  margin-top: 25px;
`;

export const GoalsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GoalsTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light};
  `};
  opacity: 0.9;
  text-transform: capitalize;
`;

export const AddGoalButton = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondary.light};
  `};
  padding: 8px;
  border-radius: 100px 50px 30px 50px / 90px 50px 20px 50px;
  cursor: pointer;
`;

export const GoalsList = styled.div`
  margin-top: 25px;
  max-height: 100%;
  overflow-y: auto;
  padding-bottom: 50px;
`;
