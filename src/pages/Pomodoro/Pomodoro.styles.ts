import styled, { css } from 'styled-components';

export const PomodoroContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PomodoroContent = styled.div`
  width: 350px;
  padding: 10px 15px;
  background: ${({ theme }) => theme.colors.primary.mid};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.primary.light};
  position: relative;
  ::before {
    content: '';
    position: absolute;
    border: 2px solid ${({ theme }) => theme.colors.secondary.light};
    top: -2px;
    left: -2px;
    bottom: -2px;
    width: 35%;
    border-radius: 4px;
    height: 100%;
    width: 100%;
  }
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

export const TimerTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.red};
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
  span {
    display: block;
    cursor: pointer;
  }
`;

export const PlayButton = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  /* opacity: 0.9; */
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

export const VolumeButton = styled.div``;
