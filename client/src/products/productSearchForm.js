import React from 'react';
import searchClient from './searchClient';

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
				<b>{product.name.substring(0, 20)}</b><br />
				{product.description.substring(0, 40)}
			</div>
		));

		return (
			<div>
				<div id="row justify-content-md-center">
					<input
					class='form-control'
					type='text'
					size='40'
					placeholder='Search products...'
					value={this.state.searchValue}
					onChange={this.handleSearchChange}
					/>
				</div>

				{productRows}
			</div>
		)
	}
}

export default productSearch