import React from 'react'

const DisplayProducts = ({ description, name, price}) => (
	<div>
		<h3><b>{name}</b></h3>
		<p>{description}</p>
		<p>Asking price: {price}</p>
	</div>
)
export default DisplayProducts