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
import Header from '../components/Header'
import Heading from '../components/Heading'
import Flag from '../components/Flag'

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
    .add('header', () => (
      <ThemeProvider theme={theme}>
        <Header/>
      </ThemeProvider>))
    .add('heading', () => (
      <ThemeProvider theme={theme}>
        <Heading
          date='1999-2003'
        >
          Batman
        </Heading>
      </ThemeProvider>))
    .add('flag', () => (
      <ThemeProvider theme={theme}>
        <Flag code='co' />
      </ThemeProvider>))