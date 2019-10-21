const productsReducer = (state = { products: [], loading: false}, action) => {
	console.log(8)
	switch (action.type) {
		case 'LOADING_PRODUCTS':
			return {
				...state,
				loading: true
		}
		case 'LOADED_PRODUCTS':
			return {
				...state,
				products: state.products.concat(action.payload),
				loading: false
			}
		case 'PRODUCT_CREATED':
			return {
				...state,
				products: state.products.concat(action.payload)
			}
		default:
			return state
	}
}

export default productsReducer