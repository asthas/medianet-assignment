import React from 'react';
import ReactDOM from 'react-dom';

import { insertGlobalStyles } from './utils/global-styles';

const App = () => (
  <div>
    Hello, world!
  </div>
);

insertGlobalStyles();

ReactDOM.render(<App />, document.getElementById('root'));
