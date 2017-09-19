import React from 'react'
import { style } from 'typestyle'

const filterItemLinkClass = style({
    padding: '6px',
	$nest: {
		'&:hover, &.is-active': {
            color: '#fff',
            backgroundColor: '#03A9F4',
            borderRadius: '12px'
        },
	},
})

const Filter = ({
    filter,
    onClick,
    active,
}) => {
	return(
		<div className="filter-item column">
			<a className={`${filterItemLinkClass} ${active ? 'is-active' : ''}`}
                href="#"
                onClick={onClick}
            >
				{filter}
			</a>
		</div>
	)
}

export default Filter
