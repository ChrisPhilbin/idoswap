import React from 'react';
import searchClient from './client';

const MATCHING_ITEM_LIMIT = 25;

class productSearchForm extends React.Component {

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

		const productRows = products.map((product, idx) => (
			<tr key={idx}>
				<td>
					<b>{product.name}</b><br />
					{product.description}
				</td>
			</tr>
		));

		return (
			<form>
				<input
				className='prompt'
				type='text'
				placeholder='Search products...'
				value={this.state.searchValue}
				onChange={this.handleSearchChange}
				/>
			</form>
			<table>
				{productRows}
			</table>
		)
	}
}

export default searchResults