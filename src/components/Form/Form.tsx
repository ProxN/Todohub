import React, { useRef } from 'react';
import Icon from '../Icon';
import {
  FormContainer,
  FormDrawwer,
  FormHeader,
  CloseBtn,
  FormContent,
} from './Form.styles';

interface Props {
  onClose: () => void;
  heading?: string;
}

const Form: React.FC<Props> = ({ onClose, heading, children }) => {
  const refBox = useRef<HTMLDivElement | null>(null);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (refBox.current && onClose) {
      const target = e.target as HTMLDivElement;

      if (
        refBox.current.contains(e.target as Node) &&
        !target.closest('svg')?.parentElement
      ) {
        return;
      }
      refBox.current.style.transform = 'translateX(100%)';
      setTimeout(() => {
        onClose();
      }, 300);
    }
  };

  return (
    <FormContainer className='test1' onClick={handleClick}>
      <FormDrawwer className='test' ref={refBox}>
        <FormHeader>
          <h4>{heading}</h4>
          <CloseBtn onClick={handleClick}>
            <Icon name='close' size='md' />
          </CloseBtn>
        </FormHeader>
        <FormContent>{children}</FormContent>
      </FormDrawwer>
    </FormContainer>
  );
};

export default Form;
