import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { App } from './components/app';
import { LoginForm } from './components/login-form';
import { SignupForm } from './components/signup-form';
import { Dashboard } from './components/dashboard';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/graphql',
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route  path='/'>
            <App>
              <Switch>
                <Route exact path="/signin" component={LoginForm} />
                <Route exact path="/signup" component={SignupForm} />
                <Route exact path="/dashboard" component={Dashboard} />
              </Switch>
            </App>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
