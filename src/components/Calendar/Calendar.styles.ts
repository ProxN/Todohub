import styled, { css } from 'styled-components';

interface StylesProps {
  opacity?: number;
  curr?: boolean;
  selected?: boolean;
}

export const CalendarContainer = styled.div`
  padding: 5px;
  background: ${({ theme }) => theme.colors.primary.mid};
  border-radius: 4px;
  box-shadow: 0 0 12px -1px rgba(0, 0, 0, 0.1);
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
  grid-gap: 5px;
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
  opacity: ${(props) => (props.opacity === 1 ? '0.5' : '0.9')};
  border: 2px solid transparent;
  border-color: ${(props) =>
    props.selected && props.theme.colors.secondary.light};
  ${({ selected, theme }) =>
    selected &&
    css`
      opacity: 1;
      border-color: ${theme.colors.secondary.light};
    `};
  border-radius: 18px 0px 18px 0px;
  justify-self: center;
  cursor: pointer;
  padding: 4px 10px;
`;
