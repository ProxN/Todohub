import styled, { css } from 'styled-components';

export const TaskBox = styled.div`
  border-radius: 12px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.mid};
  cursor: pointer;
  box-shadow: 0 0 12px -1px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
`;

export const TaskContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 20px;
`;

export const TaskName = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.regular};
  `};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TaskTime = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray.dark};
    font-size: ${theme.fontSizes.xsmall};
  `};
`;

export const TaskNotes = styled.p`
  opacity: 0.8;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
`;
