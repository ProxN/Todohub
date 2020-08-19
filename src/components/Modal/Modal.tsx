import React, { useContext } from 'react';
import { Context } from '../../context/app.context';
import { HideModal } from '../../store/actions';
import Icon from '../Icon';
// import Button from '../Button';
import {
  ModalContainer,
  ModalContent,
  ModalHeading,
  ModalHeader,
  CloseBtn,
  ModalBody,
} from './Modal.styles';

const Modal: React.FC = () => {
  const {
    state: { modal },
    dispatch,
  } = useContext(Context);

  if (!modal) return null;

  const handleCloseClick = (): void => {
    dispatch(HideModal());
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <ModalHeading>{modal.title}</ModalHeading>
          <CloseBtn onClick={handleCloseClick}>
            <Icon name='close' size='sm' />
          </CloseBtn>
        </ModalHeader>
        <ModalBody>{modal.body}</ModalBody>
        {/* <ModalFooter>
          <Button variant='default' onClick={handleCloseClick}>
            Close
          </Button>
          <Button variant='primary' onClick={modal.event}>
            Save
          </Button>
        </ModalFooter> */}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
