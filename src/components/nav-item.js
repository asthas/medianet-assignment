import React from 'react'

const NavItem = ({
	link, 
	icon,
	title,
}) => (
	<div className="navbar-item column">
		<a href={link}>
			<i className={icon} aria-hidden="true"></i>
			{title}
		</a>
	</div>
)

export default NavItem