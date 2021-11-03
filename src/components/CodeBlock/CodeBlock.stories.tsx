import React from 'react';
import { storiesOf } from '@storybook/react';
import { CodeBlock } from '.';

storiesOf('CodeBlock', module).add('Default', () => (
  <CodeBlock>{`console.log('I <3 React!!')`}</CodeBlock>
));
