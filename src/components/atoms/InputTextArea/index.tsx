import React, { FunctionComponent, useState } from 'react';
import styled from '@emotion/styled';

interface InputTextAreaProps {
  value?: string;
  label: string;
  placeholder: string;
  inputId: string;
}

interface LabelStyleProps {
  isFocused: boolean;
  htmlFor: string;
}

interface InputTextAreaStyleProps {
  isFocused?: boolean;
  onFocus?: any;
  onBlur?: any;
}

const InputTextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem 0.5rem;
`;

const LabelStyle = styled.label<LabelStyleProps>`
  width: 100%;
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: ${({ isFocused }) => (isFocused ? '#2087c9' : '#303943')};
  transition-property: color;
  transition-duration: 0.5s;
`;

const InputTextAreaStyle = styled.textarea<InputTextAreaStyleProps>`
  width: 100%;
  height: 300px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border: ${({ isFocused }) =>
    isFocused ? '2px solid #2087c9' : '2px solid #303943'};
  color: #303943;
  transition-property: color;
  transition-duration: 0.5s;
`;

interface InputTextAreaProps {
  value?: string;
  label: string;
  placeholder: string;
  inputId: string;
}

const InputTextArea: FunctionComponent<InputTextAreaProps> = ({
  value,
  label,
  placeholder,
  inputId,
}: InputTextAreaProps): React.ReactElement => {
  const [focused, setFocused] = useState(false);

  const handleFocused = (getFocused: boolean) => {
    setFocused(getFocused);
  };

  return (
    <InputTextAreaWrapper>
      <LabelStyle isFocused={focused} htmlFor={inputId}>
        {label}
      </LabelStyle>
      <InputTextAreaStyle
        isFocused={focused}
        onFocus={() => handleFocused(true)}
        onBlur={() => handleFocused(false)}
        value={value}
        placeholder={placeholder}
        id={inputId}
      />
    </InputTextAreaWrapper>
  );
};

export default InputTextArea;
