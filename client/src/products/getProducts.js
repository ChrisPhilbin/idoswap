const getProducts = () => {
	return dispatch => {
		dispatch({type: 'LOADING_PRODUCTS'})
		return (
			fetch('/api/products/all')
			.then(resp => resp.json())
			.then(products => dispatch({type: 'LOADED_PRODUCTS', payload: products}))
		)
	}
}

export default getProducts