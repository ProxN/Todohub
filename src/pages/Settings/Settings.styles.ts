import styled from 'styled-components';
import { Media } from '../../styles';

export const SettingsContent = styled.div`
  margin: 25px 0;
  width: 100%;
`;

export const LeftPanel = styled.div`
  width: 20%;
  ${Media.tablet} {
    width: 40%;
  }
  ${Media.thone} {
    width: 100%;
  }
`;

export const PanelActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  text-transform: capitalize;
`;
