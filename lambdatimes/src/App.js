import React, { Component } from 'react';
import withAuth from './components/authentication/withAuth';
import Times from './components/Content/Times';
import Login from './components/Login';

const fromWithAuth = withAuth(Times);
const RenderPage = fromWithAuth(Login);

const App = () => {
  return (
    <RenderPage />
  );
}

export default App;
