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
			<tr key={idx}>
				<td>
					<b>{product.name.substring(0, 20)}</b><br />
					{product.description.substring(0, 40)}
				</td>
			</tr>
		));

		return (
			<div id="product-search">
				<table>
					<tbody>
					<tr>
						<td>
							<h3>Input search below</h3>
							<input
							className='prompt'
							type='text'
							placeholder='Search products...'
							value={this.state.searchValue}
							onChange={this.handleSearchChange}
							/>
						</td>
					</tr>
					{productRows}
					</tbody>
				</table>
			</div>
		)
	}
}

export default productSearch