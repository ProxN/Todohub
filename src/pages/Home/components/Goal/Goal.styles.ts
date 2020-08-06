import styled from 'styled-components';

export const GoalBox = styled.div`
  border-radius: 12px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.mid};
  cursor: pointer;
  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
`;

export const GoalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const GoalText = styled.div`
  font-weight: 600;
`;

export const GoalNotes = styled.p`
  opacity: 0.8;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
`;
