import styled, { css } from 'styled-components';

export const TasksContainer = styled.div`
  overflow: hidden;
`;

export const TasksHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TasksHeading = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray.mid};
    font-size: ${theme.fontSizes.large};
  `};
  font-weight: 700;
  text-transform: capitalize;
  line-height: 1.3;
`;

export const TaskSubHeading = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.secondary.light};
    font-size: ${theme.fontSizes.medium};
  `};
`;

export const AddTaskButton = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondary.light};
  `};
  padding: 8px;
  border-radius: 100px 50px 30px 50px / 90px 50px 20px 50px;
  cursor: pointer;
`;

export const TasksList = styled.div`
  margin-top: 15px;
  max-height: 100%;
  overflow-y: auto;
`;

export const EmptyTasks = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary.mid};
    font-size: ${theme.fontSizes.regular};
  `};
  font-weight: 700;
  border-radius: 12px;
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 12px -1px rgba(0, 0, 0, 0.1);
`;
