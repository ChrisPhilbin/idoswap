import React from 'react'

const DisplayProducts = ({ created_at, description, name, price}) => (
	<div>
		<span className="product-listed-date">{created_at}</span>
		<span className="product-name-link">{name}</span>
		<span className="product-description">{description} </span>
		<span className="product-price">Asking price: ${price}</span>
	</div>
)
export default DisplayProducts