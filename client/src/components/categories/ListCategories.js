import React from 'react';
import categoriesClient from './categoryClient';

class listCategories extends React.Component {

	state = {
		categories: []
	}

	handleListCategories = () => {
		categoriesClient.getCategories(value, (categories) =>
			this.setState({
				categories: categories
			})
	)}
}

export default listCategories