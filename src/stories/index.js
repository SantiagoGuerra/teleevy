import React from 'react';
import { storiesOf } from '@storybook/react';

import '../index.css'
 
import {ThemeProvider} from 'styled-components'
import theme from '../styled.theme.js'

import Logo from '../components/Logo'
import Input from '../components/Input'
import SearchButton from '../components/SearchButton'

storiesOf('Components', module)
  .add('logo', () => <Logo />)
  .add('input', () => (
  <ThemeProvider theme={theme}>
    <Input />
  </ThemeProvider>))
 .add('search button', () => (
  <ThemeProvider theme={theme}>
    <SearchButton
      fontWeight={400}
      borderRadius={70}
    >Search</SearchButton>
  </ThemeProvider>))