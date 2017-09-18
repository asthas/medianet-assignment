import React from 'react';
import ReactDOM from 'react-dom';

import { insertGlobalStyles } from './utils/global-styles';
import { getData } from './utils/api';
import Navbar from './components/navbar';

const App = () => (
  	<div>
  		<Navbar />
		Hello, world!
  	</div>
);

getData()
	.then(data => console.log(data));

insertGlobalStyles();

ReactDOM.render(<App />, document.getElementById('app'));
