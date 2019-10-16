import React from 'react';
import searchClient from './SearchClient';
import DisplayProducts from './ProductListItem'

const MATCHING_ITEM_LIMIT = 25;

class productSearch extends React.Component {

	state = {
		products: [],
		searchValue: ''
	}

	handleSearchChange = (e) => {
		const value = e.target.value;

		this.setState({
		  searchValue: value,
		});

		if (value === '') {
		  this.setState({
		    products: []
		  });
		} else {
		  searchClient.search(value, (products) => {
		    this.setState({
		      products: products.slice(0, MATCHING_ITEM_LIMIT),
		    });
		  });
		}
	};

	render() {

		const { products } = this.state;
		const productRows = products.map((product, idx) => (
			<div id={idx}>
				<DisplayProducts name={product.name} description={product.description}
				price={product.price} created_at={product.created_at} />
			</div>
		));

		return (
			<div class="container">
				<div id="row justify-content-md-center">
					<input
					className='form-control'
					type='text'
					size='40'
					placeholder='Search products...'
					value={this.state.searchValue}
					onChange={this.handleSearchChange}
					/>
					<br />
				</div>

				<div id="searchResults">
					{productRows}
				</div>
				<br />
			</div>
		)
	}
}

export default productSearch
