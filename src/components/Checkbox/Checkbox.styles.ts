import styled from 'styled-components';

interface StylesProps {
  checked: boolean;
}

export const CheckBoxWrapper = styled.div`
  width: 20px;
  height: 20px;
`;

export const CheckboxLabel = styled.label<StylesProps>`
  border-radius: 50px;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.secondary.mid};
  cursor: pointer;
  display: block;
  background: ${(props) => props.checked && props.theme.colors.secondary.dark};
`;

export const CheckboxInput = styled.input`
  display: none;
`;
