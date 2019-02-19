import React from 'react';
import { storiesOf } from '@storybook/react';

import '../index.css'
 
import {ThemeProvider} from 'styled-components'
import theme from '../styled.theme.js'

import Logo from '../components/Logo'
import Input from '../components/Input'
import SearchButton from '../components/SearchButton'
import Search from '../components/Search'
import SearchContainer from '../components/SearchContainer'


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
   .add('search', () => (
    <ThemeProvider theme={theme}>
      <Search />
    </ThemeProvider>))
    .add('search container', () => (
      <ThemeProvider theme={theme}>
        <SearchContainer />
      </ThemeProvider>))