import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import routes from 'routes';
import MyCounter from './test';
import { createApp } from 'reactivue'

const app = createApp()

render(
  <Provider store={store}><MyCounter value={1}/></Provider>,
  document.getElementById('react')
);
