import React from 'react'

const DisplayProducts = ({ description, name, price}) => (
	<div>
		<p>
		<h3><b>{name}</b></h3>
		<p>{description}</p>
		<span className="product-price">Asking price: {price}</span>
	</div>
)
export default DisplayProducts