import React from 'react'
import { connect } from 'react-redux'
import ProductListItem from './ProductListItem'

const ProductList = (props) => (
	<div>
		<h3>Product List</h3>
		{props.products.map((product) => {
			return <ProductListItem {...product}/>
		})}
	</div>
)

const mapStateToProps = (state) => {
  	return ({
  		products: state.productsReducer.products,
  		loading: state.productsReducer.loading
  	})
}

export default connect(mapStateToProps)(ProductList)
