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

const addProducts = style({
	color: '#fff',
	backgroundColor: '#03A9F4'
})

const plusIcon = style({
	marginRight: '4px',
	fontSize: '10px'
})

class ListContainer extends Component {

	filters = [
		'Products',
		'System',
		'Anatomy',
		'SKU'
	]

	constructor(props) {
		super(props)
		this.state = {
			loading: false,
			products: null,
			currentFilter: 'system',
			activeIndex: 1
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

	setCurrentFilter = (filterIndex) => {
		if(filterIndex > 0){
			this.setState({
				activeIndex: filterIndex,
				currentFilter: this.filters[filterIndex].toLowerCase()
			})
		}
	}

	render () {
		const {
			loading,
			products,
			currentFilter,
			activeIndex
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
					<span className="is-pulled-right">
						<a className={`${addProducts} button is-small`}>
							<i className={`fa fa-plus ${plusIcon}`} aria-hidden="true"></i>
							Add Products
						</a>
					</span>
				</header>
				<Filters 
					updateCurrentFilter={this.setCurrentFilter} 
					filters={this.filters}
					activeIndex={activeIndex}
				/>
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
