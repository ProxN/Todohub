import React, { ChangeEvent } from 'react';
import { InputContainer, StyledInput, Label, TextArea } from './Input.styles';

interface Props {
  fullWidth?: boolean;
  rounded?: boolean;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'time' | 'number';
  name?: string;
  textarea?: boolean;
  label?: string;
  value?: string | number;
  min?: string;
  max?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const Input: React.FC<Props> = (props) => {
  const { fullWidth, label, name, textarea, ...rest } = props;
  return (
    <InputContainer>
      {label && <Label htmlFor={name}>{label}</Label>}
      {!textarea ? (
        <StyledInput id={name} name={name} fullWidth={fullWidth} {...rest} />
      ) : (
        <TextArea
          rows={3}
          id={name}
          name={name}
          fullWidth={fullWidth}
          {...rest}
        />
      )}
    </InputContainer>
  );
};

export default Input;
