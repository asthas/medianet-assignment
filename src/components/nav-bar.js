import React from 'react'
import NavItem from './nav-item'

const navLinks = [
	{
		link: "#",
		title: "Settings",
		icon: "fa fa-hospital-o"
	},
	{
		link: "#",
		title: "Requisition",
		icon: "fa fa-list-alt"
	},
	{
		link: "#",
		title: "Hospitals",
		icon: "fa fa-hospital-o"
	},
	{
		link: "#",
		title: "Price list",
		icon: "fa fa-th-list"
	},
	{
		link: "#",
		title: "Reps",
		icon: "fa fa-clipboard"
	},
	{
		link: "#",
		title: "Reports",
		icon: "fa fa-file-text"
	},
	{
		link: "#",
		title: "Account",
		icon: "fa fa-cog"
	},
]

const Navbar = () => (
	<div>
		<div id="main-navbar">
			<nav className="navbar is-transparent">
				<div className="navbar-brand">
					<a className="navbar-item" href="http://bulma.io">
						<a className="navbar-item " href="http://bulma.io/expo/">
							<span className="bd-emoji">⭐️</span>
							<span>Helia</span>
						</a>      
					</a>
				</div>
				<div id="navMenuTransparentExample" className="navbar-menu">
					<div className="navbar-end">
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link  is-active" href="/documentation/overview/start/">
								Biologix
							</a>
							<div className="navbar-dropdown is-boxed">
								<a className="navbar-item " href="/documentation/overview/start/">
									Overview
								</a>
								<a className="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
									Modifiers
								</a>
								<a className="navbar-item " href="http://bulma.io/documentation/columns/basics/">
									Columns
								</a>
								<a className="navbar-item " href="http://bulma.io/documentation/layout/container/">
									Layout
								</a>
								<a className="navbar-item " href="http://bulma.io/documentation/form/general/">
									Form
								</a>
								<a className="navbar-item " href="http://bulma.io/documentation/elements/box/">
									Elements
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
		<div id="secondary-navbar">
			<div className="navbar navbar-start columns is-mobile">
				{navLinks.map((navItem, i) => (
					<NavItem key={i} {...navItem} />
				))}
			</div>
		</div>	
	</div>
);

export default Navbar