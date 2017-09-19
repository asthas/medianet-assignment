/**
 * Global styles
 */

import { cssRule } from 'typestyle'

export const insertGlobalStyles = () => {
	cssRule('html, body, #app', {
		height: '100%',
	})
	cssRule('p', {
		margin: 0,
	})
	cssRule('a', {
		color: 'inherit',
		textDecoration: 'none',
	})
	cssRule('li', {
		margin: '0 auto',
		backgroundColor: 'white',
		boxShadow: '5px 5px 5px #eee',
		marginBottom: '30px',
		borderRadius: '2px',
		listStyleType: 'none',
		borderLeft: '5px solid #03A9F4',
		height: '52px',
		padding: '8px'
	})
}
