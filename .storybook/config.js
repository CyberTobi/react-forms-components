import { configure } from '@kadira/storybook';

function loadStories() {
  // require('../stories/button');
  require('../stories/textStory');
  // require as many as stories you need.
}

configure(loadStories, module);
