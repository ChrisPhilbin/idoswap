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
		if (price.match(/^\d*(\.\d{0,2})?$/)) {
		this.setState(() => ({ price }))
		}
	}

	render() {
		return(
			<div className="container">
				<form>
					<div className="form-group">
						<label for="name">Name</label>
						<input className="form-control" type="text" name="name" placeholder="Name of product" autofocus value={this.state.name} onChange={this.onNameChange} />
					</div>

					<div className="form-group">
						<label for="description">Description</label>
						<textarea className="form-control" placeholder="Description of product" value={this.state.description} onChange={this.onDescriptionChange}></textarea>
					</div>

					<div className="form-group">
						<label for="price">Price</label>
						<input className="form-control" type="number" name="price" placeholder="Initial asking price for item" value={this.state.price} onChange={this.onPriceChange} />
					</div>
						<button>Submit</button>
				</form>
			</div>
		)
	}
}