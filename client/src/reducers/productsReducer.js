const productsReducer = (state = { products: [], loading: false}, action) => {

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
		default:
			return state
	}
}

export default productsReducer