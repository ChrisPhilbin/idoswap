export const getCategories = () => {
	return dispatch => {
		dispatch({type: 'LOADING_CATEGORIES'})
		return (
			fetch('/api/categories')
			.then(resp => resp.json())
			.then(categories => dispatch({type: 'LOADED_CATEGORIES', payload: categories}))
		)
	}
}
