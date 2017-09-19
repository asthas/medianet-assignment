import React from 'react'
import {
	style,
} from 'typestyle'

const title = style({
	display: 'inline-block',
	fontSize: '14px',
	margin: '10px',
	color: '#868686'
})

const quantityContainer = style({
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
		<li>
			<span className={title}>{props.title}</span>
			<span className={`${quantityContainer} is-pulled-right`}>
				<span>{props.quantity} Products</span>
				<i className="fa fa-ellipsis-h" aria-hidden="true"></i>
			</span>
		</li>
	)
}

export default Item
