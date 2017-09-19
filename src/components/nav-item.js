import React from 'react'
import { style } from 'typestyle'

const navBarItemClass = style({
	color: '#c2c2c2',
	textAlign: 'center',
	fontSize: '12px'
});

const NavItem = ({
	link,
	icon,
	title,
}) => (
	<div className={`${navBarItemClass} column`}>
		<a href={link}>
			<i className={icon} aria-hidden="true"></i>
			{title}
		</a>
	</div>
)

export default NavItem
