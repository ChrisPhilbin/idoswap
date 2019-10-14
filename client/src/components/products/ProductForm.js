import React from 'react'
require("@rails/ujs").start()
// import axios from 'axios'
// import update from 'immutability-helper'


export default class ProductForm extends React.Component {

	state = {
		name: '',
		description: '',
		price: '',
		user_id: '1',
		category_id: '1'
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

	onProductSubmit = (e) => {
		e.preventDefault()

		let url = '/api/products'
		let data = {product: this.state}

		let createProduct = {
			method: 'post',
			body: JSON.stringify(data),
			headers: {'Content-Type': 'application/json'}
		}
		fetch(url, createProduct)
			.then(json => console.log(json))
			.catch(error => console.log(error))
	}     
 
	render() {
		return(
			<div className="container">
				<form>
					<div className="form-group">
						<label>Name</label>
						<input className="form-control" type="text" name="name" placeholder="Name of product" autoFocus value={this.state.name} onChange={this.onNameChange} />
					</div>

					<div className="form-group">
						<label>Description</label>
						<textarea className="form-control" placeholder="Description of product" value={this.state.description} onChange={this.onDescriptionChange}></textarea>
					</div>

					<div className="form-group">
						<label>Price</label>
						<input className="form-control" type="number" name="price" placeholder="Initial asking price for item" value={this.state.price} onChange={this.onPriceChange} />
					</div>
						<button onClick={this.onProductSubmit}>Submit</button>
				</form>
			</div>
		)
	}
}