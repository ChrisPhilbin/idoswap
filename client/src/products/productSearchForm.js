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
					<b>{product.name}</b><br />
					{product.description}
				</td>
			</tr>
		));

		return (
			<table>
				<tr>
					<td>
						<input
						className='prompt'
						type='text'
						placeholder='Search products...'
						value={this.state.searchValue}
						onChange={this.handleSearchChange}
						/>
					</td>
				</tr>
				<tr>
					<td>
						{productRows}
					</td>
				</tr>
			</table>
		)
	}
}

export default productSearch