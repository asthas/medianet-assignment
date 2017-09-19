/**
 * Global styles
 */

import { cssRule } from 'typestyle'

export const insertGlobalStyles = () => {
	cssRule('p', {
		margin: 0,
	})
	cssRule('a', {
		color: 'inherit',
		textDecoration: 'none',
	})
	cssRule('.title', {
		display: 'inline-block',
		fontSize: '14px',
		margin: '10px',
		color: '#868686'
	})
	cssRule('.quantity-container', {
		display: 'inline-block',
		fontSize: '10px',
		margin: '12px',
		color: '#c2c2c2',
		fontWeight: 'bold'
	})
	cssRule('li', {
		width: '80%',
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
	cssRule('.home', {
		backgroundColor: '#f2f2f2' 
	})
	cssRule('.fa-ellipsis-h', {
		marginLeft: '12px'
	})
	cssRule('.navbar-item', {
		color: '#c2c2c2',
		textAlign: 'center',
		fontSize: '12px'
	})
	cssRule('.navbar-start.columns.is-mobile', {
		'width': '100%'
	})
	cssRule('#secondary-navbar .navbar', {
		minHeight: '40px',
		borderBottom: '3px solid #e2e2e2',
		paddingTop: '10px',
		fontWeight: 'bold',
		color: '#c2c2c2',
	})
	cssRule('#secondary-navbar a.navbar-item:hover, a.navbar-item.is-active, .navbar-link:hover, .navbar-link.is-active', {
		color: '#03A9F4'
	})
	cssRule('#main-navbar .navbar', {
		minHeight: '48px',
		borderBottom: '1px solid #e2e2e2',
		color: '#c2c2c2',
	})
	cssRule('.navbar-start .fa', {
		marginRight: '8px'
	})
	cssRule('.navbar-brand .navbar-item', {
		fontSize: '18px',
		color: '#03A9F4',
		fontWeight: 'bold'
	})
}
