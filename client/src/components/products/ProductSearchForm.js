import React from 'react';
import searchClient from './SearchClient';

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
				<h3><b>{product.name.substring(0, 20)}</b></h3><br />
				{product.description.substring(0, 40)}<br />
				{product.price}
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

				{productRows}
			</div>
		)
	}
}

export default productSearch

// const productRowsFormatted = (products) => {
// 	let i = 0
// 	while (i > products.length) {
// 		products.slice(i, i+2).map((product, idx) => (
// 			<div id={idx}>
// 				<h3><b>{product.name.substring(0, 20)}</b></h3><br />
// 				{product.description.substring(0, 40)}<br />
// 				{product.price}
// 			</div>
// 		)
// 	i++
// 	}
// }