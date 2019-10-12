import React from 'react';
import CategoriesClient from './CategoryClient';

class CategoryList extends React.Component {

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

export default CategoryList