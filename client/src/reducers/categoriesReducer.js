const categoriesReducer = (state = { categories: [], loading: false}, action) => {

	switch (action.type) {
		case 'LOADING_CATEGORIES':
			return {
				...state,
				loading: true
		}
		case 'LOADED_CATEGORIES':
			return {
				...state,
				categories: state.categories.concat(action.payload),
				loading: false
			}
		default:
			return state
	}
}

export default categoriesReducer