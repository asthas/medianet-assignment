import React from 'react'
import ReactDOM from 'react-dom'
import {
	style,
} from 'typestyle'

import { insertGlobalStyles } from './utils/global-styles'
import Navbar from './components/nav-bar'
import ListContainer from './components/list-container'

const home = style({
	backgroundColor: '#f2f2f2',
	height: '100%',
})

const App = () => (
  	<div className={home}>
  		<Navbar />
  		<ListContainer />
  	</div>
)

insertGlobalStyles()

ReactDOM.render(<App />, document.getElementById('app'))
