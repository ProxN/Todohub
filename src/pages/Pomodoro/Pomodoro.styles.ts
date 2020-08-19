import styled, { css } from 'styled-components';

interface PropStyles {
  cycle?: string;
}

export const PomodoroContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PomodoroContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary.mid};
    border: 2px solid ${theme.colors.primary.light};
  `};

  width: 350px;
  height: 210px;
  padding: 10px 15px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  position: relative;

  /* ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: -2px;
    left: 0;
    border-top: 2px solid red;
    width: 1%;
    border-right: 2px solid red;
    height: 1%;
  } */
`;

export const SettingsButton = styled.div`
  cursor: pointer;
  opacity: 0.8;
  align-self: flex-end;
`;

export const TimerContainer = styled.div`
  align-self: center;
  text-align: center;
`;

export const TimerTitle = styled.div<PropStyles>`
  ${({ theme, cycle }) => css`
    font-size: ${theme.fontSizes.medium};
    color: ${cycle === 'work'
      ? theme.colors.red
      : cycle === 'short break'
      ? theme.colors.green
      : theme.colors.blue};
  `};
  text-transform: capitalize;
`;

export const Timer = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  opacity: 0.9;
`;

export const PomodoroActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PomodoroReset = styled.div`
  text-align: center;
  opacity: 0.8;
`;

export const ResetBtn = styled.div`
  display: block;
  cursor: pointer;
`;

export const PlayButton = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 50%;

  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  div:first-child {
    margin-top: -3px;
    margin-left: 2px;
  }
`;

export const VolumeButton = styled.div`
  cursor: pointer;
`;
