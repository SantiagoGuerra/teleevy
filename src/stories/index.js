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
import Stars from '../components/Stars'
import Paragraph from '../components/Paragraph'
import Tags from '../components/Tags'
import Show from '../components/Show'

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
    .add('stars', () => (
      <ThemeProvider theme={theme}>
        <Stars val={9/2} />
      </ThemeProvider>))
    .add('paragraph', () => (
      <ThemeProvider theme={theme}>
        <Paragraph>jfl ajkldfj ñlskdj fñlkjsñlkaf ñskljfñ ljslkfñj lksjñflkjdflk sjdfkljdsñkjskjfklsjfkñl jsfkljsklfj sñlkjf klsj fñlksjfñ klsjfkljsflkj ñlaskj jasklfjñ l</Paragraph>
      </ThemeProvider>))
    .add('tags', () => (
      <ThemeProvider theme={theme}>
        <Tags tags={['horror', 'animation', 'western', 'comic']} />
      </ThemeProvider>))
    .add('show', () => (
      <ThemeProvider theme={theme}>
        <Show
        urlImage='http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg'
        title='Title'
        date='2016 - 2018'
        link='https://google.com'
        code='ar'
        val={5}
        summary='<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>'
        tags={['horror', 'animation', 'western', 'comic']} />
      </ThemeProvider>))