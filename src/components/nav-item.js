import React from 'react'

const NavItem = ({
	link, 
	icon,
	title,
}) => (
	<a className="navbar-item " href={link}>
		<i className={icon} aria-hidden="true"></i>
		{title}
	</a>
)

export default NavItem