import React, { FunctionComponent, useState } from 'react';
import styled from '@emotion/styled';

interface InputTextProps {
  value?: string;
  label: string;
  placeholder: string;
  inputId: string;
}

interface LabelStyleProps {
  isFocused: boolean;
  htmlFor: string;
}

interface InputStyleProps {
  isFocused?: boolean;
  onFocus?: any;
  onBlur?: any;
}

const InputTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem 0.5rem;
`;

const LabelStyle = styled.label<LabelStyleProps>`
  width: 100%;
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: ${({ isFocused }) => (isFocused ? '#2087c9' : '#303943')};
  transition-property: color;
  transition-duration: 0.5s;
`;

const InputTextStyle = styled.input<InputStyleProps>`
  width: 100%;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  border: ${({ isFocused }) =>
    isFocused ? '2px solid #2087c9' : '2px solid #303943'};
  color: #303943;
  transition-property: border;
  transition-duration: 0.5s;
`;

const InputText: FunctionComponent<InputTextProps> = ({
  value,
  label,
  placeholder,
  inputId,
}: InputTextProps): React.ReactElement => {
  const [focused, setFocused] = useState(false);

  const handleFocused = (getFocused: boolean) => {
    setFocused(getFocused);
  };

  return (
    <InputTextWrapper>
      <LabelStyle isFocused={focused} htmlFor={inputId}>
        {label}
      </LabelStyle>
      <InputTextStyle
        isFocused={focused}
        onFocus={() => handleFocused(true)}
        onBlur={() => handleFocused(false)}
        value={value}
        placeholder={placeholder}
        id={inputId}
      />
    </InputTextWrapper>
  );
};

export default InputText;
