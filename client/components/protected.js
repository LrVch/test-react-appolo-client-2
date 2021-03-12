import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_CURRENT_USER } from '../queries/get-current-user';

// export const ProtectedRouteComponent = ({
//   component: Component,
//   hasPermission,
//   to = '/',
//   ...rest
// }) => {
//   <Route {...rest} render={(props) => 
//     !hasPermission ? <Redirect to={to} /> : <Component {...props}/>
//   }/>
// }

// export const ProtectedRoute = (props) => {
//   const {data: { user } = {}} = useQuery(GET_CURRENT_USER);

//   return <ProtectedRouteComponent {...props} hasPermission={user} />
// }