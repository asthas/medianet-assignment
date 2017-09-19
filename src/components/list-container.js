import React, {Component} from 'react'
import { style } from 'typestyle'

import Item from './item'
import Filters from './filters'
import Loading from './loading'
import { getData } from '../utils/api'
import {
	sum,
	normalize
} from '../utils/normalize'

const productCount = style({
	marginLeft: '20px',
	color: '#c2c2c2',
	textAlign: 'center',
	fontSize: '12px',
	maxWidth: '100%',
	width: '40%',
	fontWeight: 'bold'
})
const priceClass = style({
	fontSize: '18px',
	fontWeight: 'bold',
	color: '#868686'
})
const listContainerClass = style({
	width: '80%',
	margin: '0 auto',
	marginTop: '30px'
})

class ListContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: false,
			products: null,
			currentFilter: 'anatomy'
		}
	}

	componentDidMount() {
		const {
			loading,
			products,
		} = this.state;

		if (!loading && !products) {
			getData()
				.then(data => this.setState({
					products: data.products,
					loading: false,
				}))
		}
	}

	render () {
		const filters = [
			'Products',
			'Systems',
			'Anatomy',
			'SKU'
		]
		const {
			loading,
			products,
			currentFilter
		} = this.state;

		if (loading || !products) {
			return (
				<Loading />
			)
		}
		return (
			<div className={listContainerClass}>
				<header>
					<span className={priceClass}>Price List</span>
					<span className={productCount}>{sum(products)} Products</span>
				</header>
				<Filters />
				<div>
					{normalize(products, currentFilter).map((product, i) =>
						(<Item key={i} {...product} />)
					)}
				</div>
			</div>
		)
	}
}

export default ListContainer
