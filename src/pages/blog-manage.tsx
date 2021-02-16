import React, { FunctionComponent } from 'react';

import Form from '@components/organisms/Form';

const BlogManage: FunctionComponent = () => {
  return (
    <Form>
      <Form.InputText
        label="제목"
        placeholder="제목을 입력해주세요"
        inputId="blog-title-input"
      />
      <Form.InputText
        label="부제목"
        placeholder="부제목을 입력해주세요"
        inputId="blog-subtitle-input"
      />
      <Form.InputTextArea
        label="내용"
        placeholder="내용을 입력해주세요"
        inputId="blog-textarea-input"
      />
      <Form.FooterButton text="작성완료" type="submit" />
    </Form>
  );
};

export default BlogManage;
