import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';

import InputText from '@components/atoms/InputText';
import InputTextArea from '@components/atoms/InputTextArea';
import FooterButton from '@components/atoms/FooterButton';

interface FormComponentsProps {
  children: any;
}

interface FormChildComponents {
  InputText: typeof InputText;
  InputTextArea: typeof InputTextArea;
  FooterButton: typeof FooterButton;
}

const Form: FunctionComponent<FormComponentsProps> & FormChildComponents = ({
  children,
}: FormComponentsProps): React.ReactElement => {
  const history = useHistory();

  const handleSubmit = () => {
    alert('게시글이 작성되었습니다');
    history.push('/');
  };
  return <form onSubmit={handleSubmit}>{children}</form>;
};

Form.InputText = InputText;
Form.InputTextArea = InputTextArea;
Form.FooterButton = FooterButton;

export default Form;
