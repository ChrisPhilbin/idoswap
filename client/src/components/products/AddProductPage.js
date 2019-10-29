import React from 'react'
import ProductForm from './ProductForm'

const AddProductPage = (props) => {
	return(
	<div class="container">
		<br />
		<h2>Add a new product</h2>
		<ProductForm history={props.history} />
	</div>
	)
}

export default AddProductPage