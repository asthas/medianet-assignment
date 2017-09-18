import React from 'react';
import ReactDOM from 'react-dom';

import { insertGlobalStyles } from './utils/global-styles';
import { getData } from './utils/api';

const App = () => (
  <div>
    Hello, world!
  </div>
);

getData()
.then(data => console.log(data));

insertGlobalStyles();

ReactDOM.render(<App />, document.getElementById('root'));
