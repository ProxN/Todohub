import React from 'react';
import {
  ModalContainer,
  ModalContent,
  ModalHeading,
  ModalHeader,
  CloseBtn,
  ModalBody,
  ModalFooter,
} from './Modal.styles';
import Icon from '../Icon';
import Button from '../Button';

const Modal: React.FC = () => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <ModalHeading>Are you sure ?</ModalHeading>
          <CloseBtn>
            <Icon name='close' size='sm' />
          </CloseBtn>
        </ModalHeader>
        <ModalBody>You Goal will be removed</ModalBody>
        <ModalFooter>
          <Button variant='default'>Close</Button>
          <Button variant='danger'>Delete</Button>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
