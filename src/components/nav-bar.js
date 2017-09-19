import React from 'react'
import NavItem from './nav-item'
import { style } from 'typestyle'

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

const dropdownLinks = [
	{
		title: 'Overview',
		link: '#',
	},
	{
		title: 'Modifiers',
		link: '#',
	},
	{
		title: 'Columns',
		link: '#',
	},
	{
		title: 'Layout',
		link: '#',
	},
	{
		title: 'Form',
		link: '#',
	},
	{
		title: 'Elements',
		link: '#',
	},
]

const mainNavbarClass = style({
	$nest: {
		'& .navbar': {
			minHeight: '48px',
			borderBottom: '1px solid #e2e2e2',
			color: '#c2c2c2',
		}
	},
})

const secondaryNavbarClass = style({
	$nest: {
		'& a:hover, a.is-active': {
			color: '#03A9F4',
		},
		'& .navbar':  {
			minHeight: '40px',
			borderBottom: '3px solid #e2e2e2',
			paddingTop: '10px',
			fontWeight: 'bold',
			color: '#c2c2c2',
		}
	},
})

const navbarBrandClass = style({
	$nest: {
		'& .navbar-item': {
			fontSize: '18px',
			color: '#03A9F4',
			fontWeight: 'bold'
		}
	},
})

const navbarStartClass = style({
	$nest: {
		'& .fa': {
			marginRight: '8px',
		},
		'& .columns.is-mobile': {
			'width': '101%',
		},
	}
})

const notification = style({
	marginRight: '24px',
	display: 'flex',
	alignItems: 'center',
	position: 'relative'
})

const brand = style({
	$nest: {
		'& span': {
			color: '#868686',
			fontSize: '14px',
			fontWeight: 'bold'
		},
		'&:after': {
			border: '3px solid grey',
			borderRight: '0',
			borderTop: '0'
		}
	}
})

const countContainer = style({
	position: 'absolute',
	backgroundColor: 'red',
    right: '-6px',
    top: '18px',
    width: '14px',
    height: '14px',
    borderRadius: '50%'
})

const count = style({
	color: '#fff',
    fontSize: '10px',
    position: 'absolute',
    right: '-2px',
    top: '19px',
    fontWeight: 'bold'

})

class Navbar extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			activeIndex: 3
		}
	}

	handleClick = (index) => {
		this.setState({
			activeIndex: index
		})
	}

	render(){
		return(
			<div>
				<div className={mainNavbarClass}>
					<nav className="navbar is-transparent">
						<div className={navbarBrandClass}>
							<a className="navbar-item" href="http://bulma.io">
								<a className="navbar-item " href="http://bulma.io/expo/">
									<span className="bd-emoji">⭐️</span>
									<span>Helia</span>
								</a>
							</a>
						</div>
						<div id="navMenuTransparentExample" className="navbar-menu">
							<div className="navbar-end">
								<a className={`${notification} fa fa-bell`} aria-hidden="true">
									<span className={countContainer}></span>
									<span className={count}>2</span>
								</a>
								<div className="navbar-item has-dropdown is-hoverable">
									<a className={`${brand} navbar-link  is-active`} href="/documentation/overview/start/">
										<span>Biologix</span>
									</a>
									<div className="navbar-dropdown is-boxed">
										{dropdownLinks.map((item, i) => (
											<a
												key={i}
												className="navbar-item"
												href={item.link}>
												{item.title}
											</a>
										 ))}
									</div>
								</div>
							</div>
						</div>
					</nav>
				</div>
				<div className={secondaryNavbarClass}>
					<div className={`${navbarStartClass} navbar navbar-start columns is-mobile`}>
						{navLinks.map((navItem, i) => (
							<NavItem 
								key={i} 
								{...navItem} 
								onClick={() => this.handleClick(i)}
								active={this.state.activeIndex === i}
							/>
						))}
					</div>
				</div>
			</div>
		)
	}
}
	
	


export default Navbar
