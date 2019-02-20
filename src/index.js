import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App'

import {ThemeProvider} from 'styled-components'
import theme from './styled.theme.js'

ReactDOM.render(
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>, document.getElementById('root'));
serviceWorker.register();
