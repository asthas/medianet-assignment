import React from 'react'
import { style } from 'typestyle'

const navItemClass = style({
	color: '#c2c2c2',
	textAlign: 'center',
	fontSize: '12px',
	$nest: {
		'& .is-active': {
			color: '#03A9F4'
		}
	},
});

const NavItem = ({
	link,
	icon,
	title,
	onClick, 
	active
}) => (
	<div className={`${navItemClass} column`}>
		<a href={link} onClick={onClick} className={active ? 'is-active' : ''}>
			<i className={icon} aria-hidden="true"></i>
			{title}
		</a>
	</div>
)

export default NavItem
