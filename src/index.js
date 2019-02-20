import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App'

import {ThemeProvider} from 'styled-components'
import theme from './styled.theme.js'


import {Provider} from 'react-redux'
import store from './store' 


console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
</Provider>, document.getElementById('root'));
serviceWorker.register();
