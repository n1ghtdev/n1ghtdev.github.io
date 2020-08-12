import React from 'react';

function useEmailForm(fields: any, callback: Function) {
  const [state, setState] = React.useState(fields);

  function handleChange(e: any) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    // validation
    callback();
  }

  return [state, handleChange, handleSubmit];
}

export default useEmailForm;
