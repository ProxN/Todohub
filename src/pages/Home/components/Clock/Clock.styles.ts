import styled from 'styled-components';

export const ClockBox = styled.div`
  padding: 10px 15px;
  background: ${({ theme }) => theme.colors.primary.mid};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 12px -1px rgba(0, 0, 0, 0.1);
`;

export const ClockText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 600;
  opacity: 0.9;
`;
