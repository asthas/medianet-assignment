import React from 'react'

const Filter = (props) => {
	return(
		<div className="filter-item column">
			<a href="#">
				{props.filter}
			</a>	
		</div>
	)
}

export default Filter