import React from 'react'
import ReactDOM from 'react-dom'

import { insertGlobalStyles } from './utils/global-styles'
import Navbar from './components/nav-bar'
import List from './components/list'

const App = () => (
  	<div>
  		<Navbar />
  		<List />
  	</div>
)

insertGlobalStyles()

ReactDOM.render(<App />, document.getElementById('app'))
