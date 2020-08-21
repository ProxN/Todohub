import styled from 'styled-components';
import { Media } from '../../styles';

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ChildrenWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  section {
    margin-left: 70px;
    ${Media.thone} {
      margin: 0;
    }
  }
`;
