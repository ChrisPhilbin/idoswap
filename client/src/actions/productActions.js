export const getProducts = () => {
	return dispatch => {
		dispatch({type: 'LOADING_PRODUCTS'})
		return (
			fetch('/products/all')
			.then(resp => resp.json())
			.then(products => dispatch({type: 'LOADED_PRODUCTS', payload: products}))
		)
	}
}

export const addProduct = (data) => {
	return dispatch => {
		let createProduct = {
			method: 'post',
			body: JSON.stringify(data),
			headers: {'Content-Type': 'application/json'}
		}
		return (
			fetch('/products', createProduct)
			.then(resp => resp.json())
			.then(product => {
				dispatch({type: 'PRODUCT_CREATED', payload: product})
			})
		)
	}
}