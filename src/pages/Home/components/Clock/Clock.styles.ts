import styled from 'styled-components';

export const ClockBox = styled.div`
  padding: 10px 15px;
  background: ${({ theme }) => theme.colors.primary.mid};
  border-radius: 4px;
  display: flex;
  justify-content: center;
`;

export const ClockText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 600;
  opacity: 0.9;
`;
