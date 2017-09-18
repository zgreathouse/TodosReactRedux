import React from 'react';
import { Provider } from 'react-redux';

//components
import App from './app';

const Root = ({store}) => (
  <Provider store={store}>
    <App/>
  </Provider>
);

export default Root;
