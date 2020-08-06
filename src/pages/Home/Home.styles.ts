import styled, { css } from 'styled-components';

export const HomeMessage = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light};
    font-size: ${theme.fontSizes.h1};
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
  grid-template-rows: 100px calc(100vh - 100px);
  width: 100%;
  max-height: 100%;
`;

export const DashGrid = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr 300px;
  margin-top: 15px;
  flex: 1;
  overflow: hidden;
  margin-bottom: 50px;
`;
