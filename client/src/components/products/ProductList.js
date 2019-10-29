import React from 'react'
import { connect } from 'react-redux'
import ProductListItem from './ProductListItem'

const ProductList = (props) => (
	<div>
		{props.products.map((product) => {
			return <ProductListItem key={product.id} {...product}/>
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

// export default ProductList