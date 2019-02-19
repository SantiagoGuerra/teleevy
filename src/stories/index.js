import React from 'react';
import { storiesOf } from '@storybook/react';

import '../index.css'
 
import {ThemeProvider} from 'styled-components'
import theme from '../styled.theme.js'

import Logo from '../components/Logo'
import Input from '../components/Input'

storiesOf('Components', module)
  .add('logo', () => <Logo />)
  .add('input', () => (
  <ThemeProvider theme={theme}>
    <Input />
  </ThemeProvider>))
