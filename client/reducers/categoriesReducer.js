const categoriesReducer = (state = { categories: [], loading: false}, action) => {

	switch (action.type) {
		case 'LOADING_CATEGORIES':
			return {
				...state,
				loading: true
		}
		default:
			return state
	}
}

export default categoriesReducer