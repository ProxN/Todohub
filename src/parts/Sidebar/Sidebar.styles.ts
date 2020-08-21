import styled, { css } from 'styled-components';
import { Media } from '../../styles';

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.primary.mid};
  `};
  height: 100vh;
  box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.1), 0 0 10px -2px rgba(0, 0, 0, 0.1);
  position: fixed;
  ${Media.thone} {
    position: relative;
    height: 70px;
  }
`;

export const Nav = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 0;
  ${Media.thone} {
    display: none;
  }
`;

export const NavMobile = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  display: none;
  ${Media.thone} {
    display: flex;
  }
`;

export const LogoLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light};
    font-size: ${theme.fontSizes.small};
    font-family: ${theme.fonts.secondary};
  `};
  font-weight: 700;
  cursor: pointer;

  span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondary.light};
  }
`;

export const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;
