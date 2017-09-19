import React, { Component } from 'react'
import Filter from './filter'
import { style } from 'typestyle'

const filtersClass = style({
	marginTop: '10px',
	color: '#c2c2c2',
	textAlign: 'center',
	fontSize: '12px',
	maxWidth: '100%',
	width: '40%',
	fontWeight: 'bold'
})  

const Filters = ({
	filters,
	activeIndex,
	updateCurrentFilter
}) => (
	<div className={`${filtersClass} columns is-mobile`} >
		{filters.map((filter, i) =>
			(<Filter
				key={i}
				filter={filter}
				onClick={() => updateCurrentFilter(i)}
				active={activeIndex === i}
			 />)
		)}
	</div>
)

export default Filters
