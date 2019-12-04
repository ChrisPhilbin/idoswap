import React from 'react'
import ProductForm from './ProductForm'

class AddProductPage extends React.Component {
	render() {
		return(
			<div class="container">
				<br />
				<h2>Add a new product</h2>
				<ProductForm history={this.props.history} />
			</div>
		)
	}
}

export default AddProductPage

// const AddProductPage = (props) => {
// 	return(
// 	<div class="container">
// 		<br />
// 		<h2>Add a new product</h2>
// 		<ProductForm history={props.history} />
// 	</div>
// 	)
// }
