import React from 'react';
import StyledButton from './Button.styles';

interface Props {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'dashed' | 'danger' | 'default';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<Props> = (props) => {
  const { children, size = 'sm', variant, fullWidth, ...rest } = props;
  return (
    <StyledButton fullWidth={fullWidth} size={size} variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
