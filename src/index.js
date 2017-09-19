import React from 'react'
import ReactDOM from 'react-dom'

import { insertGlobalStyles } from './utils/global-styles'
import Navbar from './components/nav-bar'
import ListContainer from './components/list-container'

const App = () => (
  	<div className="home">
  		<Navbar />
  		<ListContainer />
  	</div>
)

insertGlobalStyles()

ReactDOM.render(<App />, document.getElementById('app'))
