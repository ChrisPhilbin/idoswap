import React from 'react'
import { connect } from 'react-redux'
import CategoryListItem from './CategoryListItem'

const CategoryList = (props) => (
	<div>
		{props.categories.map((category) => {
			return <CategoryListItem key={category.id} {...category}/>
		})}
	</div>
)

const mapStateToProps = (state) => {
  	return ({
  		categories: state.categoriesReducer.categories,
  		loading: state.categoriesReducer.loading
  	})
}

export default connect(mapStateToProps)(CategoryList)
