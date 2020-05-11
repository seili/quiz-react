import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Basic from '../src/components/Basic';

storiesOf('Basic', module).add('with text', () => {
  return <Basic text="Click Me" />;
});