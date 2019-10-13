import React from 'react'

export default class ProductForm extends React.Component {

	state = {
		name: '',
		description: '',
		price: ''
	}

	onNameChange = (e) => {
		const name = e.target.value
		this.setState(() => ({ name }))
	}

	onDescriptionChange = (e) => {
		const description = e.target.value
		this.setState(() => ({ description }))
	}

	onPriceChange = (e) => {
		const price = e.target.value
		this.setState(() => ({ price }))
	}

	render() {
		return(
			<div>
				<form>
					<input type="text" name="name" placeholder="Name of product" autofocus value={this.state.name} onChange={this.onNameChange} />

					<textarea placeholder="Description of product" value={this.state.description} onChange={this.onDescriptionChange}></textarea>

					<input type="number" name="price" placeholder="Initial asking price for item" value={this.state.price} onChange={this.onPriceChange} />

					<button>Submit</button>
				</form>
			</div>
		)
	}
}