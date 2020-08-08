import styled, { CSSProp, css } from 'styled-components';

interface StyleProps {
  size?: string;
  variant?: string;
  fullWidth?: boolean;
}

const PrimarySTyles = css`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light};
    background: ${theme.colors.secondary.mid};
    :disabled {
      background: ${theme.colors.secondary.light};
      opacity: 1;
      cursor: auto;
    }

    :hover:enabled {
      background: ${theme.colors.secondary.light};
      color: ${theme.colors.gray.light};
    }
  `};
`;

const DefaultStyles = css`
  ${({ theme }) => css`
    background: ${theme.colors.gray.light};
    color: ${theme.colors.primary.dark};
    border: 1px solid rgba(0, 0, 0, 0.1);
  `};
`;

const DangerStyles = css`
  ${({ theme }) => css`
    background: ${theme.colors.red};
    color: ${theme.colors.gray.light};
  `};
`;

const styles: { [key: string]: CSSProp } = {
  default: DefaultStyles,
  primary: PrimarySTyles,
  danger: DangerStyles,
};

const sizes: { [key: string]: string } = {
  sm: '6px 10px',
  md: '8px 14px',
  lg: '12px 20px',
};

export default styled.button<StyleProps>`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSizes.small};
  `};
  border: none;
  background: none;
  text-transform: capitalize;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  height: 100%;
  font-weight: 400;
  box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.1);
  width: ${(props) => props.fullWidth && '100%'};
  padding: ${(props) => sizes[props.size as string]};
  ${(props) => styles[props.variant as string]};
  margin-top: 5px;
  :not(:last-child) {
    margin-right: 15px;
  }
`;
