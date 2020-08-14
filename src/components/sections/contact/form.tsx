import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import { FormWrapper, Input, Textarea, SubmitButton } from './style';
import FormRow from './form-row';
import ButtonSubmit from '@components/button-submit';

type Props = {};

type ResponseResult = {
  status: number;
  text: string;
};

const USER_ID = (process.env as any).GATSBY_USER_ID;
const TEMPLATE_ID = (process.env as any).GATSBY_TEMPLATE_ID;

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

function Form(props: Props) {
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    isSubmitting,
    setSubmitting,
    isValidating,
    isValid,
  } = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values: any) => submitForm(values),
  });
  const [isSubmitSuccessed, setIsSubmitSuccessed] = React.useState(false);

  function submitForm(values: any) {
    emailjs.send('gmail', '', values, USER_ID).then(
      (result: ResponseResult) => handleSubmitSuccess(result),
      (error: ResponseResult) => handleSubmitFailure(error)
    );
  }

  function handleSubmitResult() {
    setSubmitting(false);
  }
  function handleSubmitSuccess(result: ResponseResult) {
    handleSubmitResult();
    // status 200 text OK
  }
  function handleSubmitFailure(error: ResponseResult) {
    handleSubmitResult();
    // status 400-500 text error message
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
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
      <ButtonSubmit
        loading={isValid && isSubmitting}
        type="submit"
        className="contact-fadeIn"
      >
        send email
      </ButtonSubmit>
    </FormWrapper>
  );
}

export default Form;
