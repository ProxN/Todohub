import styled, { css } from 'styled-components';

interface StylesProps {
  opacity?: boolean;
  curr?: boolean;
  selected?: boolean;
}

export const CalendarContainer = styled.div`
  padding: 10px 15px;
  background: ${({ theme }) => theme.colors.primary.mid};
  border-radius: 4px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CalendarMonth = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light2};
    font-size: ${theme.fontSizes.medium};
  `}
  opacity:.8;
`;

export const IconBtn = styled.div`
  cursor: pointer;
`;

export const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 8px;
  margin-top: 15px;
`;

export const CalendarDayName = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light2};
    font-size: ${theme.fontSizes.small};
  `};
  opacity: 0.8;
  justify-self: center;
  text-transform: capitalize;
`;

export const CalendarDayBox = styled.div<StylesProps>`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light2};
    font-size: ${theme.fontSizes.xsmall};
  `};
  ${({ curr, theme }) =>
    curr &&
    css`
      background: ${theme.colors.secondary.light};
      box-shadow: 0 0 6px -1px rgba(0, 0, 0, 0.2);
    `};

  /* ${(props) =>
    props.selected &&
    css`
      border: 2px solid ${props.theme.colors.secondary.light};
    `}; */
  border:2px solid transparent;
  border-color:${(props) =>
    props.selected && props.theme.colors.secondary.light};
  padding: 4px 10px;
  border-radius: 18px 0px 18px 0px;
  opacity: ${(props) => (props.opacity ? '0.5' : '0.9')};
  justify-self: center;
  cursor: pointer;
`;
