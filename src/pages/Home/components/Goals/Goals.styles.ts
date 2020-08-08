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
  ${({ theme }) => css`
    scrollbar-color: ${theme.colors.primary.light} ${theme.colors.primary.dark};
  `};
  margin-top: 15px;
  max-height: 100%;
  overflow-y: auto;
  padding-bottom: 50px;
  scrollbar-width: thin;
`;

export const EmptyGoals = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary.mid};
    font-size: ${theme.fontSizes.medium};
    font-family: ${theme.fonts.secondary};
  `};
  font-weight: 700;
  border-radius: 12px;
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.1);
`;
