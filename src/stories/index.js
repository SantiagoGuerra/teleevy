import React from 'react';
import { storiesOf } from '@storybook/react';

import Logo from '../components/Logo'

storiesOf('Components', module)
  .add('logo', () => <Logo />)