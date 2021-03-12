import React, { useState } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { AuthForm } from './auth-form';
import { LOGIN } from '../mutations/login';
import { GET_CURRENT_USER } from '../queries/get-current-user';

export const LoginForm = () => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const client = useApolloClient();
  const [loginFn, { loading }] = useMutation(LOGIN, {
    // awaitRefetchQueries: true,
    // refetchQueries: [{  query: GET_CURRENT_USER }],
    onCompleted: (data) => {
      console.log('data', data);
      client.writeQuery({  query: GET_CURRENT_USER, data: {
        user: data.login
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
    <h3>Login</h3>
    <AuthForm errors={errors} disabled={loading} onSubmit={data => {
      setErrors([])
      loginFn({
      variables: data
    })}} />
  </div>
}