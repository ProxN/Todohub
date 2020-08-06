import React from 'react';
import {
  CheckboxLabel,
  CheckboxInput,
  CheckBoxWrapper,
} from './Checkbox.styles';

interface Props {
  onChange: (e: React.MouseEvent<HTMLLabelElement>) => void;
  checked: boolean;
}

const Checkbox: React.FC<Props> = ({ onChange, checked }) => {
  return (
    <CheckBoxWrapper>
      <CheckboxLabel onClick={onChange} checked={checked}>
        <CheckboxInput type='checkbox' />
      </CheckboxLabel>
    </CheckBoxWrapper>
  );
};

export default Checkbox;
