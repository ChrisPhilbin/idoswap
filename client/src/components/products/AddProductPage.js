import React from 'react'
import ProductForm from './ProductForm'

const AddProductPage = (props) => (

	<div class="container">
		<br />
		<h2>Add a new product</h2>
		<ProductForm history={props.history} />
	</div>
)

export default AddProductPage