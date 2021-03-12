import React, { useState } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { AuthForm } from './auth-form';
import { GET_CURRENT_USER } from '../queries/get-current-user';
import { SIGNUP } from '../mutations/signup';

export const SignupForm = () => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const client = useApolloClient();
  const [signup, { loading }] = useMutation(SIGNUP, {
    onCompleted: (data) => {
      client.writeQuery({  query: GET_CURRENT_USER, data: {
        user: data.signup
      }});
      history.push('/dashboard');
    },
    onError(res) {
      const errors = res.graphQLErrors.map(error => error.message);
      console.log('errors', errors)
      setErrors(errors);
    }
  });

  return <div>
    <h3>Signup</h3>
    <AuthForm errors={errors} disabled={loading} onSubmit={data => {
      setErrors([])
      signup({
      variables: data
    })}} />
  </div>
}