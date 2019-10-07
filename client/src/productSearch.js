import React from 'react';
import searchClient from './client';

class productSearch extends React.Component {

	render() {
		return (
			<input
			className='prompt'
			type='text'
			placeholder='Search products...'
			value={this.state.searchValue}
			onChange={this.handleSearchChange}
			/>
		)
	}
}

export default searchResults