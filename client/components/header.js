import React, { memo } from 'react';
import { useQuery, useMutation, useApolloClient } from '@apollo/client';
import {
  Link
} from "react-router-dom";

import { GET_CURRENT_USER } from '../queries/get-current-user';
import { LOGOUT } from '../mutations/logout';

export const Header = memo(() => {
  const client = useApolloClient();
  const {data: { user } = {}, loading, refetch } = useQuery(GET_CURRENT_USER, {
    notifyOnNetworkStatusChange: true,
  });
  const [logout] = useMutation(LOGOUT, {
    onCompleted: () => {
      client.writeQuery({  query: GET_CURRENT_USER, data: {
        user: null
      } });
    }
  });

  console.log('Header user', user);

  const onLogoutHandler = (e) => {
    e.preventDefault();
    logout();
  }

  const renderButtons = () => {
    if (loading) return null;

    if (user) return (
      <div>
        <li>{ user.email }</li>
        <li><a onClick={onLogoutHandler} href="#">Logout</a></li>
      </div>
    );

    return <div>
        <li><Link to="/signin">SignIn</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
      </div>;
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to='/' className="brand-logo left">Home</Link>
        <ul className="right">
          {renderButtons()}
        </ul>
      </div>
    </nav>
  );
});