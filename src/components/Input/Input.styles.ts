import styled, { css } from 'styled-components';

interface StyleProps {
  fullWidth?: boolean;
}

export const InputContainer = styled.div``;

const InputStyles = css`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light};
    font-size: ${theme.fontSizes.small};
    background: ${theme.colors.primary.mid};
    box-shadow: 0 0 0 2px ${theme.colors.primary.light};
    ::placeholder {
      color: ${theme.colors.gray.dark};
      font-size: ${theme.fontSizes.xsmall};
      font-weight: 600;
      opacity: 0.8;
    }
    :focus {
      box-shadow: 0 0 0 2px ${theme.colors.secondary.mid};
    }
  `};
  border: none;
  background: transparent;
  outline: none;
  border-radius: 4px;
  padding: 6px 10px;
  line-height: 1.4;
  margin-bottom: 15px;
`;

export const StyledInput = styled.input<StyleProps>`
  ${InputStyles};
  width: ${(props) => props.fullWidth && '100%'};
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light};
  `};
  margin-bottom: 8px;
  display: block;
  opacity: 0.9;
`;

export const TextArea = styled.textarea<StyleProps>`
  ${InputStyles};
  width: ${(props) => props.fullWidth && '100%'};
`;
