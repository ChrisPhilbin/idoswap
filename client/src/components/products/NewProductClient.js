//container component responsible for POSTing new product items to the rails backend

import React from 'react'

class NewProductClient extends React.Component {

	handleFormSubmit(name, description, price){
		let body = JSON.stringify({product: {name: name, description: description, price: price} })

		fetch('http://localhost:3000/api/products', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: body,
		}).then((response) => {return response.json()})
		.then((product)=>{
			this.addNewProduct(product)
		})
	}
}

export default NewProductClient