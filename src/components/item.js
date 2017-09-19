import React from 'react'
import {
	style,
} from 'typestyle'

const listItemClass = style({
	boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.75)',
})

const titleClass = style({
	display: 'inline-block',
	fontSize: '14px',
	margin: '10px',
	color: '#868686'
})

const quantityContainerClass = style({
	display: 'inline-block',
	fontSize: '10px',
	margin: '12px',
	color: '#c2c2c2',
	fontWeight: 'bold',
	$nest: {
		'& .fa-ellipsis-h': {
			marginLeft: '12px'
		}
	}
})

const Item = (props) => {
	return(
		<li className={listItemClass}>
			<span className={titleClass}>{props.title}</span>
			<span className={`${quantityContainerClass} is-pulled-right`}>
				<span>{props.quantity} Products</span>
				<i className="fa fa-ellipsis-h" aria-hidden="true"></i>
			</span>
		</li>
	)
}

export default Item
