import React from 'react'

const Item = (props) => {
	return(
		<li>
			<span className="title">{props.title}</span>
			<span className="quantity-container is-pulled-right">
				<span>{props.quantity} Products</span>
				<i className="fa fa-ellipsis-h" aria-hidden="true"></i>
			</span>
		</li>
	)
}

export default Item