import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: red;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 25px -1px rgba(0, 0, 0, 0.1);
`;

export const ModalContent = styled.div`
  width: 300px;
  background: ${({ theme }) => theme.colors.primary.mid};
  border-radius: 4px;
`;

export const ModalHeader = styled.div`
  display: flex;
  padding: 10px 15px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.3);
`;

export const ModalHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.small};
  opacity: 0.9;
  text-transform: capitalize;
`;

export const CloseBtn = styled.div`
  cursor: pointer;
`;

export const ModalBody = styled.div`
  padding: 10px 15px;
  margin-top: 5px;
`;

export const ModalFooter = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
  padding: 10px 15px;
`;
