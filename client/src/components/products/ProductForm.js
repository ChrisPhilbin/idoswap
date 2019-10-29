import React from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { addProduct } from '../../actions/productActions'

class ProductForm extends React.Component {

	state = {
		name: '',
		description: '',
		price: '',
		user_id: '1',
		category_id: '1'
	}

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	onPriceChange = (e) => {
		const price = e.target.value
		if (price.match(/^\d*(\.\d{0,2})?$/)) {
		this.setState(() => ({ price }))
		}
	}

	onProductSubmit = (e) => {
		e.preventDefault()

		let formData = {product: this.state}

		this.props.addProduct(formData)
		this.props.history.push("/")
	}   
 
	render() {
		return(
			<div className="container">
				<form>
					<div className="form-group">
						<label>Name</label>
						<input className="form-control" type="text" name="name" placeholder="Name of product" autoFocus value={this.state.name} onChange={this.onChange} />
					</div>

					<div className="form-group">
						<label>Description</label>
						<textarea className="form-control" name="description" placeholder="Description of product" value={this.state.description} onChange={this.onChange}></textarea>
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
export default connect(null, {addProduct})(ProductForm)