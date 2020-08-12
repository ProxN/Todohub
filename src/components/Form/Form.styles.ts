import styled, { keyframes } from 'styled-components';

const DrawerAnimation = keyframes`
  from {
    transform:translateX(100%);
  }
  to{
    transform:translateX(0%);
  }
`;

export const FormContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 11;
`;

export const FormDrawwer = styled.div`
  width: 300px;
  background: ${({ theme }) => theme.colors.primary.mid};
  height: 100%;
  position: absolute;
  right: 0;
  box-shadow: 0 0 10px -1px rgba(0, 0, 0, 0.2);
  animation: ${DrawerAnimation} 300ms ease-in-out;
  transition: transform 300ms ease-in-out;
  z-index: 10;
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.3);
`;

export const CloseBtn = styled.div`
  cursor: pointer;
`;

export const FormContent = styled.div`
  padding: 25px 20px;
`;
