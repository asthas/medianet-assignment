import React, {Component} from 'react'
import Item from './item'
import Loading from './loading'
import { getData } from '../utils/api'
import {
	sum,
	normalize
} from '../utils/normalize'

class List extends Component {

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
			<div>
				<p>Total Products {sum(products)}</p>
				<div>
					{normalize(products, currentFilter).map(product =>
						(<Item {...product} />)
					)}
				</div>
			</div>
		)
	}
}

export default List