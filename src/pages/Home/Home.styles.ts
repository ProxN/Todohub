import styled, { css } from 'styled-components';
import { Media } from '../../styles';

export const HomeMessage = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light};
    font-size: ${theme.fontSizes.h2};
    span {
      color: ${theme.colors.secondary.light};
    }
  `}
  font-weight: 700;
  text-transform: capitalize;
  margin-top: 15px;
`;

export const HomeContent = styled.div`
  display: grid;
  grid-template-rows: 80px calc(100vh - 80px);
  width: 100%;
  max-height: 100%;
  ${Media.tablet} {
    grid-template-rows: auto;
  }
`;

export const DashGrid = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr 250px;
  margin-top: 15px;
  flex: 1;
  overflow: hidden;
  margin-bottom: 50px;
  grid-gap: 130px;

  ${Media.bigDesktop} {
    grid-template-columns: 320px 1fr 200px;
    grid-gap: 25px;
  }
  ${Media.desktop} {
    grid-template-columns: 320px 1fr;
    grid-gap: 25px;
  }
  ${Media.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  }
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
