import React from 'react';
// import { useQuery } from '@apollo/client';

import { Header } from './header';
// import { GET_CURRENT_USER } from '../queries/get-current-user';

export const App = ({ children }) => {
  // const {data: { user } = {}, refetch, networkStatus} = useQuery(GET_CURRENT_USER, {
  //   notifyOnNetworkStatusChange: true
  // });

  // console.log('user App', user)
  // console.log('networkStatus App', networkStatus)

  return (
    <div>
      <Header />
      <div className="container">
        {/* <button onClick={() => refetch()}>App refetch</button> */}
        { children }
      </div>
    </div>
  );
}