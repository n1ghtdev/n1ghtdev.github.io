import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import {
  FormWrapper,
  Input,
  Textarea,
  FormButtonSubmit,
  FormResponseMessage,
} from './style';
import FormRow from './form-row';

type ResponseResult = {
  status: number;
  text: string;
};

const USER_ID = (process.env as any).GATSBY_USER_ID;
const TEMPLATE_ID = (process.env as any).GATSBY_TEMPLATE_ID;
const SUCCESSFUL_MESSAGE = 'Thank You. The email was successfully sent.';

const schema = Yup.object({
  name: Yup.string(),
  email: Yup.string()
    .email('Please enter a valid email')
    .min(5)
    .required('Please enter a valid email'),
  message: Yup.string().max(200).required('Message cannot be empty'),
});

const initialValues = {
  name: '',
  email: '',
  message: '',
};

function Form() {
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    isSubmitting,
    setSubmitting,
    dirty,
    isValid,
  } = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values: any) => submitForm(values),
  });

  const [isSubmitSuccessful, setIsSubmitSuccessful] = React.useState<
    boolean | undefined
  >();
  const [responseMessage, setResponseMessage] = React.useState<string>('');

  function submitForm(values: any) {
    emailjs.send('gmail', TEMPLATE_ID, values, USER_ID).then(
      (result: ResponseResult) => handleSubmitResult(result),
      (error: ResponseResult) => handleSubmitResult(error)
    );
  }

  function handleSubmitResult(result: ResponseResult) {
    const { status, text } = result;

    const isStatusSuccessful = status >= 200 && status < 300;
    const message = isStatusSuccessful ? SUCCESSFUL_MESSAGE : text;

    setIsSubmitSuccessful(isStatusSuccessful);
    setResponseMessage(message);

    setSubmitting(false);
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {responseMessage ? (
        <FormResponseMessage isSuccess={!!isSubmitSuccessful}>
          {responseMessage}
        </FormResponseMessage>
      ) : null}
      <FormRow name="name" error={touched.name && errors.name}>
        <Input name="name" value={values.name} onChange={handleChange} />
      </FormRow>
      <FormRow name="email" error={touched.email && errors.email}>
        <Input name="email" value={values.email} onChange={handleChange} />
      </FormRow>
      <FormRow name="message" error={touched.message && errors.message}>
        <Textarea
          rows={6}
          name="message"
          value={values.message}
          onChange={handleChange}
        />
      </FormRow>
      <FormButtonSubmit
        disabled={!dirty || !isValid}
        loading={isSubmitting}
        type="submit"
        className="contact-fadeIn"
      >
        send email
      </FormButtonSubmit>
    </FormWrapper>
  );
}

export default Form;
