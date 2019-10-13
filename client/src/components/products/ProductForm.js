import React from 'react'

export default class ProductForm extends React.Component {

	render() {
		return(
			<div>
				<form>
					<input type="text" name="name" placeholder="Name of product" autofocus>

					<textarea placeholder="Description of product"></textarea>

					<input type="number" name="price" placeholder="Initial asking price for item">

					<button>Submit</button>
				</form>
			</div>
		)
	}
}