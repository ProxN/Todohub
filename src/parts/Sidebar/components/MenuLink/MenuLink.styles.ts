import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export default styled(NavLink)`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light};
    &.active {
      background: ${theme.colors.secondary.light};
    }
  `};
  margin: 15px 10px;
  padding: 5px;
  border-radius: 4px;
`;
