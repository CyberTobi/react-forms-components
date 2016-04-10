##React-Form-Components.
Form components for inputs.

##Setup
Inorder to setup this.

```
clone the project
cd <project dir>
npm install

```

##Develop
Each component has its assosiated stories.

```javascript
# index.js with text component
import React from 'react';
import '../styles/css/bootstrap.css';

const Text = React.createClass({
   render: function(){
     return (<input type="text"
              className="form-control"
              placeholder={this.props.placeholder}
              value={this.props.fieldvalue}/>)
   }
});

export {Text};

## textStory.js with stories to Text Component

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import {Text} from '../src/index';

storiesOf('Text', module)
   .add('Display a Text Field', () => (
     <Text placeholder="hello" fieldvalue="world of react" />
   ));

```

So inorder to run the story book run

```
npm run storybook

```

##License
MIT
