import React from 'react'
import axios from 'axios'
import update from 'immutability-helper'


export default class ProductForm extends React.Component {

	state = {
		name: '',
		description: '',
		price: '',
		user_id: '1'
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
		let url = 'http://localhost:3001/api/products/new'
		let data = { product: this.state }

		let createProduct = {
			method: 'POST',
			body: data
		}
		fetch(url, createProduct)
			.then(json => console.log(json))
			.catch(error => console.log(error))
	}

    // axios.post('/api/products/new', {product: this.state })
    // .then(response => {
    // 	debugger;
    //   const product = update(this.state, {
    //     $splice: [[0, 0, response.data]]
    //   })
    //   this.setState({
    //     product
    //   })
    // })
    // .catch(error => console.log(error))      
 
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
						<button onClick={this.onProductSubmit}>Submit</button>
				</form>
			</div>
		)
	}
}