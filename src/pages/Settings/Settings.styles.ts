import styled from 'styled-components';

export const SettingsContent = styled.div`
  margin: 25px 0;
  width: 100%;
`;

export const LeftPanel = styled.div`
  width: 20%;
`;

export const PanelActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  text-transform: capitalize;
`;
