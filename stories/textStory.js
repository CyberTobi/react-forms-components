import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import {Text} from '../src/index';

storiesOf('Text', module)
   .add('Display a Text Field', () => (
     <Text placeholder="hello" fieldvalue="world of react" />
   ));
