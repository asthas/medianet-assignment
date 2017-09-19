import React, {Component} from 'react'
import Item from './item'
import Filter from './filter'
import Loading from './loading'
import { getData } from '../utils/api'
import {
	sum,
	normalize
} from '../utils/normalize'

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
			<div className="list-container">
				<header>
					<span className="price">Price List</span>
					<span className="product-count">{sum(products)} Products</span>
				</header>
				<div className="filters columns is-mobile">
					{filters.map((filter, i) => 
						(<Filter key={i} filter={filter} />)
					)}
				</div>
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