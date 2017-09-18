import React from 'react'

const Item = (props) => {
	return(
		<li>
			<h4 className="title">{props.title}</h4>
			<h5 className="quantity">{props.quantity} Products</h5>
			<i class="fa fa-ellipsis-h" aria-hidden="true"></i>
		</li>
	)
}

export default Item