const productsReducer = (state = { products: [], loading: false}, action) => {

	switch (action.type) {
		case 'LOADING_PRODUCTS':
			return {
				...state,
				loading: true
		}
		default:
			return state
	}
}

export default productsReducer